import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

// https://swapi.co/api/people/

const App = () => {
  const [starWarsData, setStarWarsData] = useState({});

  const dataGetter = () => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  useEffect();
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Card />
    </div>
  );
};

export default App;
