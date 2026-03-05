// src/app/AppRoutes.tsx
import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  Routes as Router,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Routes } from "./routes";

import MenuMusic from "../assets/audio/intro.mp3";

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

  /** -------------------------
   * INTRO STATE
   * ------------------------- */
  useEffect(() => {
    const s = localStorage.getItem("introSeen");
    if (s === "true") setIntroSeen(true);
  }, []);

  /** -------------------------
   * AUDIO PLAYER
   * ------------------------- */
  useEffect(() => {
    if (!audioRef.current || !currentMusic) return;

    // audioRef.current.pause();
    audioRef.current.src = currentMusic;
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;
    audioRef.current.muted = muted;

    audioRef.current.play().catch(() => {});
  }, [currentMusic, muted]); // dépend uniquement de la musique

  /** -------------------------
   * HANDLE MUTE
   * ------------------------- */
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = muted; // ne change pas la src ni ne relance play()
  }, [muted]);

  /** -------------------------
   * MUSIC ROUTING
   * ------------------------- */
  // useEffect(() => {
  //   // MENU
  //   if (location.pathname === Routes.accueil) {
  //     setCurrentMusic(MenuMusic);
  //   }

  //   // PINBALL → stop menu music
  //   if (location.pathname.startsWith("/pinball")) {
  //     setCurrentMusic(null);
  //   }
  // }, [location.pathname]);

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
          <Route
            path="/"
            element={
              introSeen ? (
                <Navigate to={Routes.accueil} replace />
              ) : (
                <Navigate to={Routes.intro} replace />
              )
            }
          />

          <Route
            path={Routes.intro}
            element={<Intro muted={muted} setMuted={setMuted} />}
          />

          <Route
            path={Routes.accueil}
            element={<Accueil muted={muted} setMuted={setMuted} />}
          />

          <Route path="/pinball/:name" element={<PinballPage />} />

          <Route
            path={Routes.hiScore}
            element={<HiScore muted={muted} setMuted={setMuted} />}
          />
          <Route path="*" element={<div>Introuvable</div>} />
        </Router>
      </Suspense>
    </>
  );
};
