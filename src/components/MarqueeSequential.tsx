import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  children: React.ReactNode;
  duration?: number;
  color?: string;
  fontSize?: number;
}

export const MarqueeSequentialComponent: React.FC<Props> = ({
  children,
  duration = 3000,
  color = "yellow",
  fontSize = 20,
}) => {
  const items = React.Children.toArray(children);
  const [index, setIndex] = useState(0);

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

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  10% { opacity: 1; transform: translateY(0px); }
  90% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-10px); }
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  background-color: "black";
`;

const Text = styled.div<{ $color: string; $fontSize: number }>`
  color: ${(p) => p.$color};
  font-size: ${(p) => p.$fontSize}px;
  animation: ${fadeInOut} 3s linear infinite;
  font-family: "Press Start 2P", monospace;
`;
