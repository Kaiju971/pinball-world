import React, { useEffect, useRef } from "react";
import { Game } from "./core/Game";

export default function GameContainer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const game = new Game(canvasRef.current);
    game.start();

    return () => {
      game.stop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="pinball-canvas"
      width={420}
      height={800}
      style={{
        background: "#000",
        display: "block",
        margin: "0 auto",
      }}
    ></canvas>
  );
}
