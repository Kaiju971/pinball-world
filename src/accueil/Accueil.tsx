import React from "react";
import { useNavigate } from "react-router-dom";
import Mythology from "../assets/images/Mythology.png";
import AiRobot from "../assets/images/AiRobot.png";
import Entity from "../assets/images/Entity.png";
import GoldWheel from "../assets/images/GoldWheel.png";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import * as S from "./Accueil.styled";

/** 🔊 PROPS REÇUES DE AppRoutes */
export interface AccueilProps {
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

const itemData = [
  { img: Mythology, title: "Mythology", url: "Mythology" },
  { img: AiRobot, title: "AiRobot", url: "AiRobot" },
  { img: Entity, title: "Entity", url: "Entity" },
  { img: GoldWheel, title: "GoldWheel", url: "GoldWheel" },
];

const Accueil: React.FC<AccueilProps> = ({ muted, setMuted }) => {
  const navigate = useNavigate();

  return (
    <S.MainContainer>
      {/* 🔊 BOUTON SON GLOBAL */}
      <S.SoundButton onClick={() => setMuted((m) => !m)}>
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </S.SoundButton>

      {/* 🎮 GRILLE DES PINBALL */}
      <S.GridContainer>
        {itemData.map((item) => (
          <S.GridItem
            key={item.title}
            onClick={() => navigate(`/pinball/${item.url}`)}
          >
            <img src={item.img} alt={item.title} />
          </S.GridItem>
        ))}
      </S.GridContainer>

      {/* 🔵 MARQUEE */}
      <S.Marquee speed={15} color="#00eaff" fontSize={28}>
        <div className="track">
          <p>WELCOME TO THE PINBALL WORLD!</p>
          <p>DEVELOPED & REALISED BY SWAM CONCEPT!</p>
        </div>
      </S.Marquee>

      {/* 🟡 MARQUEE SEQUENTIEL */}
      <S.MarqueeSequential>
        {[
          "---INSTRUCTIONS---",
          "---CLICK TO SELECT TABLE TO PLAY---",
          "---USE ARROW DOWN ↓ TO LAUNCH---",
          "---USE SHIFT LEFT ⬆︎ / SHIFT RIGHT ⬆︎ ---",
          "---PUSH TABLE WITH SPACE ﹈ (BUT NOT TOO MUCH)---",
          "---PRESS SOUNDBOARD TO STOP THE MUSIC 🔇---",
        ].map((text, i) => (
          <div
            key={i}
            className="line"
            style={{ animationDelay: `${i * 5000}ms` }}
          >
            {text}
          </div>
        ))}
      </S.MarqueeSequential>

      {/* 🏆 HI-SCORE */}
      <S.ScoreButton onClick={() => navigate("/hiscore")}>
        VIEW HI-SCORES
      </S.ScoreButton>
    </S.MainContainer>
  );
};

export default Accueil;
