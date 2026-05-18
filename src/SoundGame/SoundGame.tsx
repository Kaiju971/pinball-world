import React, { useState } from "react";
import { Routes } from "../app/routes";
import { useNavigate } from "react-router-dom";

import * as S from "./SoundGame.styled";

interface Props {
  setMuted: (v: boolean) => void;
  setSoundChoiceDone: (v: boolean) => void;
}

const SoundGame: React.FC<Props> = ({ setMuted, setSoundChoiceDone }) => {
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

      <S.Subtitle>ENABLE SOUND SYSTEM</S.Subtitle>

      <S.SwitchContainer onClick={handleToggle} active={enabled}>
        <S.SwitchTrack active={enabled}>
          <S.SwitchThumb active={enabled} />

          <S.LabelLeft active={enabled}>OFF</S.LabelLeft>

          <S.LabelRight active={enabled}>ON</S.LabelRight>
        </S.SwitchTrack>
      </S.SwitchContainer>

      <S.Hint onClick={() => navigate(Routes.intro)}>CLICK TO START</S.Hint>
    </S.Wrapper>
  );
};

export default SoundGame;
