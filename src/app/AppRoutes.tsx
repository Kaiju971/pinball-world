import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  Routes as Router,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { Routes } from "./routes";

import MenuMusic from "../assets/audio/intro.mp3";

const SoundGame = lazy(() => import("../SoundGame"));
const Intro = lazy(() => import("../intro"));
const Accueil = lazy(() => import("../accueil"));
const PinballPage = lazy(() => import("../pinball/PinballGame"));
const HiScore = lazy(() => import("../hiScore"));

export const AppRoutes: React.FC = () => {
  const location = useLocation();
  const audioRef = useRef<HTMLAudioElement>(null);

  const [introSeen, setIntroSeen] = useState(false);
  const [muted, setMuted] = useState(true);
  const [currentMusic, setCurrentMusic] = useState<string | null>(MenuMusic);
  const [soundChoiceDone, setSoundChoiceDone] = useState(false);

  /** -------------------------
   * INTRO STATE
   * ------------------------- */
  useEffect(() => {
    const s = localStorage.getItem("introSeen");
    if (s === "true") setIntroSeen(true);
  }, []);

  /** -------------------------
   * SOUND CHOICE
   * ------------------------- */
  useEffect(() => {
    const sound = localStorage.getItem("Sound");

    if (sound !== null) {
      setSoundChoiceDone(true);
      setMuted(sound !== "true");
    }
  }, []);

  /** -------------------------
   * MUSIC ROUTING
   * ------------------------- */
  useEffect(() => {
    if (location.pathname === Routes.accueil) {
      setCurrentMusic(MenuMusic);
    }

    if (location.pathname.startsWith("/pinball")) {
      setCurrentMusic(null);
    }
  }, [location.pathname]);

  /** -------------------------
   * AUDIO PLAYER
   * ------------------------- */
  useEffect(() => {
    if (!audioRef.current) return;

    if (!currentMusic) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      return;
    }

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.src = currentMusic;
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;
    audioRef.current.muted = muted;

    audioRef.current.play().catch(() => {});
  }, [currentMusic, muted]);

  return (
    <>
      <audio ref={audioRef} />

      <Suspense fallback={<div>Chargement...</div>}>
        <Router>
          {/* ENTRY POINT */}
          <Route
            path="/"
            element={
              !soundChoiceDone ? (
                <Navigate to="/Sound" replace />
              ) : introSeen ? (
                <Navigate to={Routes.accueil} replace />
              ) : (
                <Navigate to={Routes.intro} replace />
              )
            }
          />

          {/* SOUND CHOICE */}
          <Route
            path="/Sound"
            element={
              <SoundGame
                setMuted={setMuted}
                setSoundChoiceDone={setSoundChoiceDone}
              />
            }
          />

          {/* INTRO */}
          <Route
            path={Routes.intro}
            element={<Intro muted={muted} setMuted={setMuted} />}
          />

          {/* MENU */}
          <Route
            path={Routes.accueil}
            element={<Accueil muted={muted} setMuted={setMuted} />}
          />

          {/* PINBALL TABLE */}
          <Route path="/pinball/:name" element={<PinballPage />} />

          {/* HIGHSCORE */}
          <Route
            path={Routes.hiScore}
            element={<HiScore muted={muted} setMuted={setMuted} />}
          />

          {/* 404 */}
          <Route path="*" element={<div>Introuvable</div>} />
        </Router>
      </Suspense>
    </>
  );
};
