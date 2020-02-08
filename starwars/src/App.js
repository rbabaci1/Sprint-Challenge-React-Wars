import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
`;

const App = () => {
  const [starWarsData, setStarWarsData] = useState([]);

  const dataGetter = () => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => setStarWarsData(response.data))
      .catch(error => console.error(error));
  };
  useEffect(dataGetter, []);

  return (
    <div className="App">
      <h1 className="Header">
        Page 1 has {starWarsData.count} Star Wars characters!
      </h1>

      <CardWrapper>
        {/* {starWarsData.results
          ? starWarsData.results.map(starWar => (
              <Card key={starWar.name} starWar={starWar} />
            ))
          : null} */}
        {starWarsData.results ? (
          <Card starWar={starWarsData.results[0]} />
        ) : null}
      </CardWrapper>
    </div>
  );
};

export default App;
