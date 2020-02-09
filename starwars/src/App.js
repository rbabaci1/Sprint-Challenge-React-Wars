import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 40px;
`;
const PageChanging = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  span {
    font-size: 40px;
  }
  h2 {
    margin: 0 30px;
  }
`;

const App = () => {
  const [starWarsData, setStarWarsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(9);

  const dataGetter = () => {
    axios
      .get(`https://swapi.co/api/people/?page=${pageNumber}`)
      .then(response => {
        setStarWarsData(response.data);
      })
      .catch(error => console.error(error));
  };
  useEffect(dataGetter, []);

  return (
    <div className="App">
      <PageChanging>
        <span>{"\u2b05"}</span>
        <h2>Page {pageNumber}</h2>
        <span>{"\u27a1"}</span>
      </PageChanging>

      <CardWrapper>
        {starWarsData.results
          ? starWarsData.results.map(starWar => (
              <Card key={starWar.name} starWar={starWar} />
            ))
          : null}
      </CardWrapper>
    </div>
  );
};

export default App;
