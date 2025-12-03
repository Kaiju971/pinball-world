// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import BeatBox from "../assets/images/BeatBox.png";
// import Ignition from "../assets/images/Ignition.png";
// import Nightmare from "../assets/images/Nightmare.png";
// import SteelWheel from "../assets/images/SteelWheel.png";

// import * as S from "./Accueil.styled";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import VolumeOffIcon from "@mui/icons-material/VolumeOff";
// import MusicAccueil from "../assets/audio/MENU.mp3";

// import { Marquee } from "./Accueil.styled";
// import { MarqueeSequentialComponent } from "../components/MarqueeSequential";

// const itemData = [
//   { img: BeatBox, title: "BeatBox", url: "BeatBox" },
//   { img: Ignition, title: "Ignition", url: "Ignition" },
//   { img: Nightmare, title: "Nightmare", url: "Nightmare" },
//   { img: SteelWheel, title: "SteelWheel", url: "SteelWheel" },
// ];

// const Accueil: React.FC = () => {
//   const navigate = useNavigate();

//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [muted, setMuted] = useState(true);

//   useEffect(() => {
//     if (!audioRef.current) return;

//     audioRef.current.volume = 0.6;
//     audioRef.current.muted = true;

//     audioRef.current.play().catch(() => {});
//   }, []);

//   return (
//     <S.MainContainer>
//       {/* musique */}
//       <audio ref={audioRef} src={MusicAccueil} loop />

//       {/* bouton son */}
//       <S.SoundButton
//         onClick={() => {
//           if (!audioRef.current) return;
//           audioRef.current.muted = !audioRef.current.muted;
//           setMuted(audioRef.current.muted);
//         }}
//       >
//         {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
//       </S.SoundButton>

//       {/* grid */}
//       <S.GridContainer>
//         {itemData.map((item) => (
//           <S.GridItem
//             key={item.title}
//             onClick={() => navigate(`/pinball/${item.url}`)}
//           >
//             <img src={item.img} alt={item.title} />
//           </S.GridItem>
//         ))}
//       </S.GridContainer>

//       {/* 🔵 MARQUEE défilement continu */}
//       <Marquee speed={12} color="#00eaff">
//         <div className="track">
//           <p>WELCOME TO THE PINBALL WORLD!</p>
//           <p>DEVELOPED & REALISED BY SWAM CONCEPT!</p>
//         </div>
//       </Marquee>

//       {/* 🟡 MARQUEE SEQUENTIEL (phrases une par une) */}
//       <MarqueeSequentialComponent color="yellow" fontSize={18} duration={3000}>
//         <p>...INSTRUCTIONS...</p>
//         <p>CLICK TO SELECT TABLE TO PLAY</p>
//         <p>USE ARROW DOWN TO LAUNCH</p>
//         <p>USE SHIFT LEFT / SHIFT RIGHT</p>
//         <p>PUSH TABLE WITH SPACE (BUT NOT TOO MUCH)</p>
//         <p>PRESS SOUNDBOARD TO STOP THE MUSIC</p>
//       </MarqueeSequentialComponent>
//     </S.MainContainer>
//   );
// };

// export default Accueil;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import BeatBox from "../assets/images/BeatBox.png";
import Ignition from "../assets/images/Ignition.png";
import Nightmare from "../assets/images/Nightmare.png";
import SteelWheel from "../assets/images/SteelWheel.png";
import MusicAccueil from "../assets/audio/MENU.mp3";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import * as S from "./Accueil.styled";

const itemData = [
  { img: BeatBox, title: "BeatBox", url: "BeatBox" },
  { img: Ignition, title: "Ignition", url: "Ignition" },
  { img: Nightmare, title: "Nightmare", url: "Nightmare" },
  { img: SteelWheel, title: "SteelWheel", url: "SteelWheel" },
];

const Accueil: React.FC = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = 0.6;
    audioRef.current.muted = true;
    audioRef.current.play().catch(() => {});
  }, []);

  return (
    <S.MainContainer>
      <audio ref={audioRef} src={MusicAccueil} loop />

      <S.SoundButton
        onClick={() => {
          if (!audioRef.current) return;
          audioRef.current.muted = !audioRef.current.muted;
          setMuted(audioRef.current.muted);
        }}
      >
        {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </S.SoundButton>

      <S.GridContainer>
        {itemData.map((item) => (
          <S.GridItem
            key={item.title}
            onClick={() => navigate(`/pinball/${item.url}`)}
          >
            <img src={item.img} alt={item.title} />
          </S.GridItem>
        ))}
      </S.GridContainer>

      <S.Marquee speed={15} color="#00eaff" fontSize={28}>
        <div className="track">
          <p>WELCOME TO THE PINBALL WORLD!</p>
          <p>DEVELOPED & REALISED BY SWAM CONCEPT!</p>
        </div>
      </S.Marquee>

      <S.MarqueeSequential>
        {[
          "---INSTRUCTIONS---",
          "---CLICK TO SELECT TABLE TO PLAY---",
          "---USE ARROW DOWN ↓ TO LAUNCH---",
          "---USE SHIFT LEFT ⬆︎ / SHIFT RIGHT ⬆︎ ---",
          "---PUSH TABLE WITH SPACE ﹈ (BUT NOT TOO MUCH)---",
          "---PRESS SOUNDBOARD TO STOP THE MUSIC 🔇---",
        ].map((text, i) => (
          <div
            key={i}
            className="line"
            style={{ animationDelay: `${i * 5000}ms` }} // 3s par ligne
          >
            {text}
          </div>
        ))}
      </S.MarqueeSequential>
      {/* 🔵 BOUTON HI-SCORE */}
      <S.ScoreButton onClick={() => navigate("/hiscore")}>
        VIEW HI-SCORES
      </S.ScoreButton>
    </S.MainContainer>
  );
};

export default Accueil;
