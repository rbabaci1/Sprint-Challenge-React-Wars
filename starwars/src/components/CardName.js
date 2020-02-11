import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

CardName.propTypes = {
  // charName should be a string
  charName: PropTypes.string,
  // age should be a string or a number
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // arr should be an array of numbers
  arr: PropTypes.arrayOf(PropTypes.number),

  arrOfObj: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number
    })
  )
};
