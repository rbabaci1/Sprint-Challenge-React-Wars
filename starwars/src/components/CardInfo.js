import React from "react";
import styled from "styled-components";

const InfoDiv = styled.div`
  display: flex;
  background: #868580;
  margin-top: 10px;

  div {
    width: 48%;
    margin: auto;

    h3 {
      color: #613e12;
      font-family: monospace;
      font-size: 18px;
      border-bottom: 1px solid gold;
      padding-bottom: 5px;
    }
    p {
      font-size: 18px;
      color: black;
      border-bottom: 1px solid orange;
      padding-bottom: 5px;
    }
  }
`;

export default function CardInfo({ character }) {
  return (
    <InfoDiv>
      <div>
        <h3>Height:</h3>
        <h3>Mass:</h3>
        <h3>Hair_Color:</h3>
        <h3>Skin_Color:</h3>
        <h3>Eye_Color:</h3>
        <h3>Birth_Year:</h3>
        <h3>Gender:</h3>
        <h3>Films-Num:</h3>
        <h3>Vehicles-Num:</h3>
        <h3>Starships-Num:</h3>
      </div>
      <div>
        <p>{character.height}</p>
        <p>{character.mass}</p>
        <p>{character.hair_color}</p>
        <p>{character.skin_color}</p>
        <p>{character.eye_color}</p>
        <p>{character.birth_year}</p>
        <p>{character.gender}</p>
        <p>{character.films.length}</p>
        <p>{character.vehicles.length}</p>
        <p>{character.starships.length}</p>
      </div>
    </InfoDiv>
  );
}
