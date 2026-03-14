import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IntroContainer, Video, AudioToggleButton } from "./Intro.styled";
import introVideo from "../assets/videos/intro-pinball-world-nosound-small.mp4";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

/**
 * ❗ IMPORTANT
 * La musique NE VIENT PAS d'ici
 * Elle est gérée globalement dans AppRoutes
 */
export interface IntroProps {
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Intro: React.FC<IntroProps> = ({ muted, setMuted }) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});

    video.addEventListener("ended", () => {
      navigate("/accueil");
    });

    return () => {
      video.pause();
    };
  }, [navigate]);

  return (
    <IntroContainer>
      {/* 🎥 VIDEO INTRO (SANS AUDIO) */}
      <Video ref={videoRef} autoPlay muted playsInline>
        <source src={introVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </Video>

      {/* 🔊 CONTROLE DU SON GLOBAL (AppRoutes) */}
      <AudioToggleButton onClick={() => setMuted((m) => !m)}>
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </AudioToggleButton>
    </IntroContainer>
  );
};

export default Intro;
