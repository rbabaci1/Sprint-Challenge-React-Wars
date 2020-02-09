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

const App = () => {
  const [starWarsData, setStarWarsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

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
      <h1 className="Header">Page 1</h1>

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
