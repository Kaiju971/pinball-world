import React, { useEffect, useRef, useState } from "react"; // 👈 ajoute useState
import { useNavigate } from "react-router-dom";
import introVideo from "../assets/videos/intro-pinball-world-nosound-small.mp4";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import * as S from "./Intro.styled";

export interface IntroProps {
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Intro: React.FC<IntroProps> = ({ muted, setMuted }) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSkip, setShowSkip] = useState(false); // 👈 nouveau

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

  useEffect(() => {
    // 👈 nouveau
    setTimeout(() => setShowSkip(true), 2000);
  }, []);

  return (
    <S.IntroContainer>
      <S.Video ref={videoRef} autoPlay muted playsInline>
        <source src={introVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </S.Video>
      <S.AudioToggleButton onClick={() => setMuted((m) => !m)}>
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </S.AudioToggleButton>
      {/* ⏭ bouton skip — visible après 2s */}
      {showSkip && ( // 👈 nouveau
        <S.SkipButton onClick={handleSkip}>
          <span>SKIP INTRO</span>
        </S.SkipButton>
      )}
    </S.IntroContainer>
  );
};

export default Intro;
