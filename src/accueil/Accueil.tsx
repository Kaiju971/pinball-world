import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ Ajouté
import MarqueeSequentialComponent from "../components/MarqueeSequentialComponent";
import Mythology from "../assets/images/Mythology.webp";
import AiRobot from "../assets/images/AiRobot.webp";
import Entity from "../assets/images/Entity.webp";
import GoldWheel from "../assets/images/GoldWheel.webp";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { PinballKey } from "../pinball/pinballData";
import * as S from "./Accueil.styled";

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

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      {["fr", "en"].map((lang) => (
        <button
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          style={{ fontWeight: i18n.language === lang ? "bold" : "normal" }}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

const Accueil: React.FC<AccueilProps> = ({ muted, setMuted }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // ✅ AJOUTE CI ! (pour utiliser t())

  return (
    <S.MainContainer>
      <S.SoundButton onClick={() => setMuted((m) => !m)}>
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </S.SoundButton>

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

      <S.Marquee speed={15} color="#00eaff" fontSize={28}>
        <div className="track">
          <p>WELCOME TO THE PINBALL'S WORLD!</p>
          <p>DEVELOPED & REALISED BY SWAM CONCEPT!</p>
        </div>
      </S.Marquee>

      {/* ✅ Composant corrigé */}
      <MarqueeSequentialComponent
        textKey="accueil.welcome" // ✅ Clé directe dans i18n
        color="yellow"
        fontSize={30}
        duration={2500}
      />

      <S.ScoreButton onClick={() => navigate("/hiscore")}>
        {t("accueil.viewHiScores")} {/* ✅ Texte traduit */}
      </S.ScoreButton>
    </S.MainContainer>
  );
};

export default Accueil;
