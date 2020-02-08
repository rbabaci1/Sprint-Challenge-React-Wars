import React from "react";
import CardName from "./CardName";
import CardInfo from "./CardInfo";
import styled from "styled-components";

const CardDiv = styled.div`
  padding: 15px;
  background: gold;
  width: 400px;
`;
const Image = styled.img`
  width: 90%;
`;

export default function Card({ starWar }) {
  return (
    <CardDiv>
      <Image src="https://cdn.pixabay.com/photo/2017/07/25/22/54/office-2539844_1280.jpg" />
      <CardName charName={starWar.name} />
      <CardInfo info={starWar} />
    </CardDiv>
  );
}
