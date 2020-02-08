import React from "react";
import CardName from "./CardName";
import CardInfo from "./CardInfo";

export default function Card({ starWar }) {
  return (
    <div>
      <CardName charName={starWar.name} />
      <CardInfo info={starWar} />
    </div>
  );
}
