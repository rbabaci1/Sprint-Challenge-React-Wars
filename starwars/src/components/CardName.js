import React from "react";
import styled from "styled-components";

const NameDiv = styled.div`
  border-bottom: 2px solid gray;

  h1 {
    margin: 10px 0;
    font-size: 25px;
    font-family: Monaco;
    color: #555050;

    span {
      font-weight: bold;
      color: black;
    }
  }
`;

export default function CardName({ charName }) {
  return (
    <NameDiv>
      <h1>
        <span>Name: </span>
        {charName}
      </h1>
    </NameDiv>
  );
}
