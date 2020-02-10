import React from "react";
import styled from "styled-components";

const NameDiv = styled.div`
  border-bottom: 2px dashed #555353;

  h1 {
    margin: 20px 0;
    font-size: 24px;
    font-family: Monaco;

    span {
      color: #7a2e10;
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
