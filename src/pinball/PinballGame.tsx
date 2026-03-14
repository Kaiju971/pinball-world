import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import * as THREE from "three";
import { pinballData, PinballKey } from "./pinballData";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import * as S from "./Pinball.styled";

const PinballGame: React.FC = () => {
  const { name } = useParams<{ name: PinballKey }>();
  const tableKey = (name || "AiRobot") as PinballKey;
  const tableConfig = pinballData[tableKey];

  const mountRef = useRef<HTMLDivElement>(null);

  const previewMusic = useRef<HTMLAudioElement | null>(null);
  const gameMusic = useRef<HTMLAudioElement | null>(null);
  const endMusic = useRef<HTMLAudioElement | null>(null);

  const ballRef = useRef<THREE.Mesh | null>(null);

  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const [ballsLeft, setBallsLeft] = useState(3);

  const readyToShootRef = useRef(true);
  const gameStartedRef = useRef(false);
  const previewActiveRef = useRef(true);

  const velocityRef = useRef(0);
  const ballYRef = useRef(1.2);

  const previewDirRef = useRef<1 | -1>(1);
  const previewYRef = useRef(10);

  const previewMinY = 0;
  const previewMaxY = 16.15;
  const previewSpeed = 0.02;

  /** ---------------- AUDIO ---------------- */

  useEffect(() => {
    previewMusic.current = new Audio(tableConfig.musicPreview);
    gameMusic.current = new Audio(tableConfig.musicGame);
    endMusic.current = new Audio(tableConfig.musicEnd);

    previewMusic.current.loop = true;
    gameMusic.current.loop = true;
    endMusic.current.loop = false;

    previewMusic.current.muted = muted;
    gameMusic.current.muted = muted;
    endMusic.current.muted = muted;

    previewMusic.current.play().catch(() => {});

    return () => {
      previewMusic.current?.pause();
      gameMusic.current?.pause();
      endMusic.current?.pause();
    };
  }, [tableKey]);

  useEffect(() => {
    if (previewMusic.current) previewMusic.current.muted = muted;
    if (gameMusic.current) gameMusic.current.muted = muted;
    if (endMusic.current) endMusic.current.muted = muted;
  }, [muted]);

  /** ---------------- THREE ---------------- */

  useEffect(() => {
    if (!mountRef.current) return;

    setLoading(true);

    const manager = new THREE.LoadingManager();

    manager.onLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1600);
    };

    const loader = new THREE.TextureLoader(manager);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    mountRef.current.innerHTML = "";
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const aspect = width / height;
    const viewSize = 4.7;

    const camera = new THREE.OrthographicCamera(
      -viewSize * aspect,
      viewSize * aspect,
      viewSize,
      -viewSize,
      0.1,
      100,
    );

    camera.position.set(0, previewYRef.current, 10);

    /** TABLE */

    const tableTexture = loader.load(tableConfig.img);

    const table = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 20),
      new THREE.MeshBasicMaterial({
        map: tableTexture,
        transparent: true,
      }),
    );

    table.position.set(0, 10, 0);
    scene.add(table);

    /** BALL */

    const ballTexture = loader.load(tableConfig.ballImg!);

    const ball = new THREE.Mesh(
      new THREE.CircleGeometry(0.25, 32),
      new THREE.MeshBasicMaterial({
        map: ballTexture,
        transparent: true,
      }),
    );

    ball.position.set(4.7, ballYRef.current, 2);
    scene.add(ball);
    ballRef.current = ball;

    /** PHYSICS */

    const gravity = -0.002;
    const minY = 0.6;
    const maxY = 19;

    const animate = () => {
      if (previewActiveRef.current) {
        previewYRef.current += previewSpeed * previewDirRef.current;

        if (previewYRef.current >= previewMaxY) previewDirRef.current = -1;
        if (previewYRef.current <= previewMinY) previewDirRef.current = 1;

        camera.position.y = previewYRef.current;
      }

      if (gameStartedRef.current) {
        velocityRef.current += gravity;
        ballYRef.current += velocityRef.current;

        if (ballYRef.current <= minY) {
          setBallsLeft((b) => {
            if (b <= 1) {
              gameMusic.current?.pause();
              endMusic.current?.play().catch(() => {});
            }
            return b - 1;
          });

          readyToShootRef.current = true;
          gameStartedRef.current = false;

          ballYRef.current = 1.2;
          velocityRef.current = 0;
        }

        ballYRef.current = THREE.MathUtils.clamp(ballYRef.current, minY, maxY);

        if (ballRef.current) {
          ballRef.current.position.y = ballYRef.current;
        }

        camera.position.y = THREE.MathUtils.lerp(
          camera.position.y,
          ballYRef.current,
          0.2,
        );
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, [tableKey]);

  /** ---------------- CONTROLS ---------------- */

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowDown" && readyToShootRef.current) {
        previewActiveRef.current = false;

        previewMusic.current?.pause();
        gameMusic.current?.play().catch(() => {});

        velocityRef.current = 0.12;
        readyToShootRef.current = false;
        gameStartedRef.current = true;
      }
    };

    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, []);

  /** ---------------- JSX ---------------- */

  return (
    <S.MainContainer>
      <S.HUD>
        <S.Score>{ballsLeft} BALLS</S.Score>
      </S.HUD>

      <S.Page>
        <S.CanvasWrapper>
          {loading && (
            <S.Spinner>
              LOADING
              <S.Line />
              {tableKey.toUpperCase()}
            </S.Spinner>
          )}

          <div ref={mountRef} style={{ width: "100%", height: "200%" }} />
        </S.CanvasWrapper>

        <S.SoundButton onClick={() => setMuted((m) => !m)}>
          {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </S.SoundButton>
      </S.Page>
    </S.MainContainer>
  );
};

export default PinballGame;
