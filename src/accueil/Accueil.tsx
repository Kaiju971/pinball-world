import React from "react";
import { useNavigate } from "react-router-dom";
import BeatBox from "../assets/images/BeatBox.png";
import Ignition from "../assets/images/Ignition.png";
import Nightmare from "../assets/images/Nightmare.png";
import SteelWheel from "../assets/images/SteelWheel.png";

import * as S from "./Accueil.styled";

const itemData = [
  { img: BeatBox, title: "BeatBox", url: "/pinball/BeatBox" },
  { img: Ignition, title: "Ignition", url: "/pinball/Ignition" },
  { img: Nightmare, title: "Nightmare", url: "/pinball/Nightmare" },
  { img: SteelWheel, title: "SteelWheel", url: "/pinball/SteelWheel" },
];

const Accueil: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.GridContainer>
      {itemData.map((item) => (
        <S.GridItem key={item.title} onClick={() => navigate(item.url)}>
          <img src={item.img} alt={item.title} />
        </S.GridItem>
      ))}
    </S.GridContainer>
  );
};

export default Accueil;
