import React from "react";
import { styled } from "@mui/material/styles";
import { Modal, Box, Button } from "@mui/material";
import neonSound from "../assets/sounds/reset.wav";

interface Props {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const GlowBox = styled(Box)({
  background: "rgba(0, 0, 0, 0.85)",
  border: "2px solid #0ff",
  borderRadius: "16px",
  padding: "30px",
  width: "320px",
  textAlign: "center",
  boxShadow: "0 0 20px #0ff, 0 0 40px #0ff",
  animation: "popup 0.25s ease-out",
  "@keyframes popup": {
    from: { transform: "scale(0.6)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
  },
});

const Title = styled("h2")({
  fontFamily: "Orbitron, sans-serif",
  color: "#0ff",
  textShadow: "0 0 10px #0ff, 0 0 20px #0ff",
  marginBottom: "20px",
  letterSpacing: "2px",
});

const StyledButton = styled(Button)({
  fontSize: "1rem",
  fontFamily: "Orbitron, sans-serif",
  borderRadius: "10px",
  padding: "10px 20px",
  margin: "0 10px",
  color: "#0ff",
  borderColor: "#0ff",
  textShadow: "0 0 10px #0ff",
  "&:hover": {
    boxShadow: "0 0 20px #0ff",
    borderColor: "#0ff",
  },
});

const HiScoreResetModal = ({ open, onCancel, onConfirm }: Props) => {
  const handleConfirm = () => {
    const audio = new Audio(neonSound);
    audio.volume = 0.6;
    audio.play();
    onConfirm();
  };

  return (
    <Modal open={open} onClose={onCancel}>
      <Box
        sx={{
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <GlowBox>
          <Title>RESET HIGHSCORES ?</Title>

          <StyledButton variant="outlined" onClick={onCancel}>
            CANCEL
          </StyledButton>

          <StyledButton variant="outlined" onClick={handleConfirm}>
            CONFIRM
          </StyledButton>
        </GlowBox>
      </Box>
    </Modal>
  );
};

export default HiScoreResetModal;
