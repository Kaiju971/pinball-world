// src/intro/Intro.tsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IntroContainer, Video, AudioToggleButton } from "./Intro.styled";
import introVideo from "../assets/videos/Intro.mp4";
import introAudio from "../assets/audio/intro.mp3";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (video && audio) {
      // Lire les deux simultanément
      video.play().catch(() => {});
      audio.play().catch(() => {});

      // Synchroniser audio avec la vidéo
      video.addEventListener("timeupdate", () => {
        if (Math.abs(video.currentTime - audio.currentTime) > 0.1) {
          audio.currentTime = video.currentTime;
        }
      });

      // Quand la vidéo se termine
      video.addEventListener("ended", () => {
        onComplete();
        navigate("/accueil");
      });
    }
  }, [navigate, onComplete]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (muted) {
      audio.muted = false;
      setMuted(false);
    } else {
      audio.muted = true;
      setMuted(true);
    }
  };

  return (
    <IntroContainer>
      <Video ref={videoRef} autoPlay muted={muted} playsInline>
        <source src={introVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </Video>

      {/* Audio séparé */}
      <audio ref={audioRef} src={introAudio} muted={muted} />

      {/* Bouton pour activer/désactiver le son */}
      <AudioToggleButton onClick={toggleMute}>
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </AudioToggleButton>
    </IntroContainer>
  );
};

export default Intro;
