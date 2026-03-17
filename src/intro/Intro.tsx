import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { IntroContainer, Video, AudioToggleButton } from "./Intro.styled";
import introVideo from "../assets/videos/intro-pinball-world-nosound-small.mp4";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import * as S from "./Intro.styled";

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
  const handleSkip = () => {
    videoRef.current?.pause();
    navigate("/accueil");
  };

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
    <S.IntroContainer>
      {/* 🎥 VIDEO INTRO (SANS AUDIO) */}
      <S.Video ref={videoRef} autoPlay muted playsInline>
        <source src={introVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </S.Video>

      {/* 🔊 CONTROLE DU SON GLOBAL (AppRoutes) */}
      <S.AudioToggleButton onClick={() => setMuted((m) => !m)}>
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </S.AudioToggleButton>
      {/* ⏭ bouton skip */}
      <S.SkipButton onClick={handleSkip}>
        <span>SKIP INTRO</span>
      </S.SkipButton>
    </S.IntroContainer>
  );
};

export default Intro;
