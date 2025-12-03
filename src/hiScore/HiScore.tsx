import React from "react";
import * as S from "./HiScore.styled";

const TABLES = ["Ignition", "BeatBox",  "Nightmare", "SteelWheel"]; // Ajoute tes tables ici

const HiScore: React.FC = () => {
  const scores = TABLES.map((name) => ({
    table: name,
    score: Number(localStorage.getItem(`highscore_${name}`) || 0),
  }));

  return (
    <S.MainContainer>
      <S.Title>HIGH SCORES</S.Title>

      {scores.map((s) => (
        <S.ScoreLine key={s.table}>
          <span className="table-name">{s.table}</span>
          <span className="score">{s.score}</span>
        </S.ScoreLine>
      ))}
    </S.MainContainer>
  );
};

export default HiScore;
