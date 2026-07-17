import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";

interface Props {
  textKey: string; // ✅ Prop pour la clé de traduction
  duration?: number;
  color?: string;
  fontSize?: number;
}

const MarqueeSequentialComponent: React.FC<Props> = ({
  textKey,
  duration = 3000,
  color = "yellow",
  fontSize = 20,
}) => {
  const { t } = useTranslation(); // ✅ Utilise useTranslation
  const [index, setIndex] = useState(0);

  // ✅ Récupère le texte traduit et le split par "✦"
  const fullText = t(textKey);
  const items = fullText.split("✦").filter(Boolean); // Sépare et filtre les parties vides

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, duration);
    return () => clearInterval(interval);
  }, [duration, items.length]);

  return (
    <Wrapper>
      <Text $color={color} $fontSize={fontSize}>
        {items[index]}
      </Text>
    </Wrapper>
  );
};

// --- Styles (inchangés) ---
const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  10% { opacity: 1; transform: translateY(0px); }
  90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-10px); }
`;

const Wrapper = styled.div`
  width: 100%;
  height:100%;
  text-align: center;
  padding-top: 2px;
  background-color: black;
`;

const Text = styled.div<{ $color: string; $fontSize: number }>`
  color: ${(p) => p.$color};
  font-size: ${(p) => p.$fontSize}px;
  animation: ${fadeInOut} 3s linear infinite;
  font-family: "Press Start 2P", monospace;
`;
export default MarqueeSequentialComponent;