import React from "react";
import styled from "styled-components";

const NameDiv = styled.div`
  border-bottom: 2px solid gray;
`;

export default function CardName({ charName }) {
  return (
    <NameDiv>
      <h1>{charName}</h1>
    </NameDiv>
  );
}
