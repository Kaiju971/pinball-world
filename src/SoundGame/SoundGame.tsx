import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Routes } from "../app/routes";
import { useNavigate } from "react-router-dom";
import * as S from "./SoundGame.styled";

interface Props {
  setMuted: (v: boolean) => void;
  setSoundChoiceDone: (v: boolean) => void;
}

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    // Charge la langue sauvegardée au montage
    const savedLang = localStorage.getItem("gameLang") || "fr";
    if (i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
      setCurrentLang(savedLang);
    }
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem("gameLang", lang); // Persiste le choix
  };

  return (
    <S.LanguageContainer>
      {["fr", "en"].map((lang) => (
        <S.LanguageButton
          key={lang}
          onClick={() => changeLanguage(lang)}
          active={currentLang === lang}
        >
          {lang}
        </S.LanguageButton>
      ))}
    </S.LanguageContainer>
  );
};

const SoundGame: React.FC<Props> = ({ setMuted, setSoundChoiceDone }) => {
  const { t } = useTranslation();
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    const value = !enabled;
    setEnabled(value);
    setMuted(!value);
    localStorage.setItem("gameSound", value ? "true" : "false");

    setTimeout(() => {
      setSoundChoiceDone(true);
    }, 600);
  };

  return (
    <S.Wrapper>
      <S.Title>PINBALL'S WORLD</S.Title>

      {/* ✅ Sélecteur de langue */}
      <LanguageSwitcher />

      <S.Subtitle>{t("sound.enableSystem")}</S.Subtitle>

      <S.SwitchContainer onClick={handleToggle} active={enabled}>
        <S.SwitchTrack active={enabled}>
          <S.SwitchThumb active={enabled} />
          <S.LabelLeft active={enabled}>{t("sound.off")}</S.LabelLeft>
          <S.LabelRight active={enabled}>{t("sound.on")}</S.LabelRight>
        </S.SwitchTrack>
      </S.SwitchContainer>

      <S.Hint onClick={() => navigate(Routes.intro)}>
        {t("sound.clickToStart")}
      </S.Hint>
    </S.Wrapper>
  );
};

export default SoundGame;