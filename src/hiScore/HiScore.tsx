// src/pages/HiScore.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import * as S from "./HiScore.styled";
import HiScoreResetModal from "./HiScoreResetModal";
import {
  getScores,
  saveScore,
  resetScores,
  ScoreBoard,
  ScoreEntry,
} from "../pinball/utils/scores";

const DEFAULT_SCORES: ScoreBoard = {
  Mythology: [
    { initials: "AAA", score: 1000000 },
    { initials: "BOB", score: 800000 },
    { initials: "KRN", score: 600000 },
    { initials: "ZZZ", score: 400000 },
  ],
  AiRobot: [
    { initials: "LUX", score: 1200000 },
    { initials: "FIR", score: 900000 },
    { initials: "JAY", score: 700000 },
    { initials: "MNT", score: 300000 },
  ],
  Entity: [
    { initials: "DRK", score: 1400000 },
    { initials: "GH0", score: 1100000 },
    { initials: "SAM", score: 650000 },
    { initials: "KYL", score: 250000 },
  ],
  GoldWheel: [
    { initials: "RAC", score: 1300000 },
    { initials: "SPD", score: 1000000 },
    { initials: "BRK", score: 500000 },
    { initials: "JMP", score: 200000 },
  ],
};

/** 🔊 PROPS REÇUES DE AppRoutes */
export interface HiscoreProps {
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hiscore: React.FC<HiscoreProps> = ({ muted, setMuted }) => {
  const navigate = useNavigate();

  const [board, setBoard] = useState<ScoreBoard>(() =>
    getScores(DEFAULT_SCORES),
  );
  const [modal, setModal] = useState<{
    open: boolean;
    table?: string;
    score?: number;
  }>({ open: false });
  const [initials, setInitials] = useState<string>("AAA");
  const [openReset, setOpenReset] = useState(false);

  const openAdd = (table: string, score: number) => {
    setInitials("AAA");
    setModal({ open: true, table, score });
  };

  const confirmAdd = () => {
    if (!modal.table || typeof modal.score !== "number") return;
    saveScore(modal.table, initials.slice(0, 3).toUpperCase(), modal.score);
    setModal({ open: false });
  };

  const handleConfirmReset = () => {
    resetScores(DEFAULT_SCORES);
    setBoard(getScores(DEFAULT_SCORES));
    setOpenReset(false);
  };

  return (
    <S.MainContainer>
      <S.Title>HIGH-SCORES</S.Title>
      {/* 🔊 BOUTON SON GLOBAL */}
      <S.SoundButton onClick={() => setMuted((m) => !m)}>
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </S.SoundButton>

      <S.Controls>
        <div />
        <div
          style={{
            position: "fixed",
          }}
        >
          <S.Button onClick={() => navigate("/Accueil")}>BACK</S.Button>
        </div>
        {/* <div>
          <S.Button
            onClick={() => openAdd("BeatBox", Math.floor(Math.random() * 2000))}
          >
            Add score
          </S.Button>
          <S.Button
            onClick={() => setOpenReset(true)}
            style={{ marginLeft: 12 }}
          >
            Reset Scores
          </S.Button>
        </div> */}
      </S.Controls>

      <S.ScoreGrid>
        {Object.entries(board).map(([table, players]) => (
          <S.ScoreCard key={table}>
            <S.TableName>{table}</S.TableName>
            <S.PlayerList>
              {players.map((p: ScoreEntry, idx: number) => (
                <div className="player" key={idx}>
                  <span>{idx + 1}.</span>
                  <span
                    style={
                      idx === 0 ? { fontWeight: 700, color: "#ffea00" } : {}
                    }
                  >
                    {p.initials}
                  </span>
                  <span style={{ marginLeft: 12 }}>{p.score}</span>
                </div>
              ))}
            </S.PlayerList>
          </S.ScoreCard>
        ))}
      </S.ScoreGrid>

      {/* Modal arcade NEON pour RESET */}
      <HiScoreResetModal
        open={openReset}
        onCancel={() => setOpenReset(false)}
        onConfirm={handleConfirmReset}
      />

      {/* Modal simple pour entrer initiales */}
      {modal.open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.6)",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#111",
              padding: 24,
              borderRadius: 8,
              minWidth: 320,
            }}
          >
            <div style={{ marginBottom: 12 }}>
              Enter initials (3 chars) for {modal.table} — score {modal.score}
            </div>
            <input
              value={initials}
              onChange={(e) =>
                setInitials(e.target.value.toUpperCase().slice(0, 3))
              }
              maxLength={3}
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 20,
                padding: "8px 10px",
              }}
            />
            <div
              style={{
                marginTop: 12,
                display: "flex",
                gap: 8,
                justifyContent: "flex-end",
              }}
            >
              <S.Button onClick={() => setModal({ open: false })}>
                Cancel
              </S.Button>
              <S.Button onClick={confirmAdd}>OK</S.Button>
            </div>
          </div>
        </div>
      )}
      <S.Pinball>PINBALL WORLD!</S.Pinball>
    </S.MainContainer>
  );
};
export default Hiscore;
