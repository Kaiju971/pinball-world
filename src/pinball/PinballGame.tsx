import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import * as THREE from "three";
import { pinballData, PinballKey } from "./pinballData";
import * as S from "./Pinball.styled";

const PinballGame: React.FC = () => {
  const { name } = useParams<{ name: PinballKey }>();
  const tableKey = (name || "Ignition") as PinballKey;
  const tableConfig = pinballData[tableKey];

  const mountRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);

  /** -------------------------
   * THREE.JS - reload on table change
   * ------------------------- */
  useEffect(() => {
    if (!mountRef.current) return;
    setLoading(true);

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.1, 100);
    camera.position.set(0, 0, 10);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Texture table
    new THREE.TextureLoader().load(tableConfig.img, (texture) => {
      const tableMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10),
        new THREE.MeshBasicMaterial({ map: texture })
      );
      scene.add(tableMesh);
      setLoading(false);
    });

    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();
  }, [tableConfig.img, tableKey]);

  /** -------------------------
   * AUDIO - reload on table change
   * ------------------------- */
  useEffect(() => {
    if (!audioRef.current) return;
    setLoading(true);

    audioRef.current.pause();
    audioRef.current.src = tableConfig.music || "";
    audioRef.current.load();

    const onCanPlay = () => {
      setLoading(false);
      if (!muted) audioRef.current?.play().catch(() => {});
    };
    audioRef.current.addEventListener("canplaythrough", onCanPlay, {
      once: true,
    });

    return () => {
      audioRef.current?.pause();
    };
  }, [tableKey, muted, tableConfig.music]);

  return (
    <S.Page>
      <S.CanvasWrapper>
        {loading && <S.Spinner>Loading...</S.Spinner>}
        <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      </S.CanvasWrapper>

      <audio key={tableKey} ref={audioRef} loop />

      <S.Controls>
        <S.SpeakerButton onClick={() => setMuted((m) => !m)}>
          {muted ? "🔇" : "🔊"}
        </S.SpeakerButton>
      </S.Controls>
    </S.Page>
  );
};

export default PinballGame;
