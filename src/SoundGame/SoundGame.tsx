// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Routes } from "../app/routes";

// import * as S from "./SoundGame.styled";

// interface Props {
//   setMuted: (v: boolean) => void;
//   setSoundChoiceDone: (v: boolean) => void;
// }

// const SoundGame: React.FC<Props> = ({ setMuted, setSoundChoiceDone }) => {
//   const navigate = useNavigate();

//   const handleChoice = (enabled: boolean) => {
//     localStorage.setItem("gameSound", enabled ? "true" : "false");

//     setMuted(!enabled);
//     setSoundChoiceDone(true);

//     navigate(Routes.intro);
//   };

//   return (
//     <S.Wrapper>
//       <div className="toggle-container">
//         <div className="toggle-wrap">
//           <input type="checkbox" id="sound-toggle" className="toggle-input" />

//           <label htmlFor="sound-toggle" className="toggle-track">
//             <div className="track-lines">
//               <div className="track-line"></div>
//             </div>

//             <div className="toggle-thumb">
//               <div className="thumb-core"></div>
//               <div className="thumb-inner"></div>
//               <div className="thumb-scan"></div>

//               <div className="thumb-particles">
//                 <div className="thumb-particle"></div>
//                 <div className="thumb-particle"></div>
//                 <div className="thumb-particle"></div>
//                 <div className="thumb-particle"></div>
//                 <div className="thumb-particle"></div>
//               </div>
//             </div>

//             <div className="toggle-data">
//               <span
//                 className="data-text off"
//                 onClick={() => handleChoice(false)}
//               >
//                 OFF
//               </span>
//               <span
//                 className="data-text on"
//                 onClick={() => handleChoice(true)}
//               >
//                 ON
//               </span>
//               {/* <button onClick={() => handleChoice(true)}>YES</button>

//               <button onClick={() => handleChoice(false)}>NO</button> */}

//               <div className="status-indicator off"></div>
//               <div className="status-indicator on"></div>
//             </div>

//             <div className="energy-rings">
//               <div className="energy-ring"></div>
//               <div className="energy-ring"></div>
//               <div className="energy-ring"></div>
//             </div>

//             <div className="interface-lines">
//               <div className="interface-line"></div>
//               <div className="interface-line"></div>
//               <div className="interface-line"></div>
//               <div className="interface-line"></div>
//               <div className="interface-line"></div>
//               <div className="interface-line"></div>
//             </div>

//             <div className="toggle-reflection"></div>
//             <div className="holo-glow"></div>
//           </label>
//         </div>

//         <div className="toggle-label">SOUND SYSTEM</div>
//       </div>
//     </S.Wrapper>
//   );
// };

// export default SoundGame;

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
      <S.Title>PINBALL WORLD</S.Title>

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
