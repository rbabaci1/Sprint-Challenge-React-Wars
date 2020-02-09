import React, { useState } from "react";
import styled from "styled-components";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const InfoDiv = styled.div`
  display: flex;
  background: #868580;
  margin-top: 10px;

  div {
    width: 50%;
    margin: 8px auto;

    h3 {
      color: #7a2e10;
      font-family: monospace;
      font-size: 20px;
      padding: 5px;
      border-bottom: 1px solid;
    }
  }
`;
const changeColor = { color: "black" };

export default function CardInfo({ character }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button onClick={toggle} style={{ margin: "1rem", fontSize: "17px" }}>
        More Info
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
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
                <h3 style={changeColor}>{character.height}</h3>
                <h3 style={changeColor}>{character.mass}</h3>
                <h3 style={changeColor}>{character.hair_color}</h3>
                <h3 style={changeColor}>{character.skin_color}</h3>
                <h3 style={changeColor}>{character.eye_color}</h3>
                <h3 style={changeColor}>{character.birth_year}</h3>
                <h3 style={changeColor}>{character.gender}</h3>
                <h3 style={changeColor}>{character.films.length}</h3>
                <h3 style={changeColor}>{character.vehicles.length}</h3>
                <h3 style={changeColor}>{character.starships.length}</h3>
              </div>
            </InfoDiv>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
