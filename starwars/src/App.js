import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import styled from "styled-components";

const AppDiv = styled.div`
  text-align: center;
`;
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
    font-size: 36px;
    cursor: pointer;
  }
  h2 {
    margin: 0 30px;
    font-size: 26px;
    font-family: Monaco;
    border-radius: 5px;
  }
`;

const App = () => {
  const [starWarsData, setStarWarsData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageUrl, setPageUrl] = useState(
    `https://swapi.co/api/people/?page=${pageNum}`
  );

  const pageClickHandler = event => {
    if (starWarsData.previous && event.target.innerHTML === "\u2b05") {
      setPageUrl(starWarsData.previous);
      setPageNum(pageNum - 1);
    } else if (starWarsData.next && event.target.innerHTML === "\u27a1") {
      setPageUrl(starWarsData.next);
      setPageNum(pageNum + 1);
    }
  };

  const dataGetter = () => {
    axios
      .get(pageUrl)
      .then(response => {
        setStarWarsData(response.data);
      })
      .catch(error => console.error(error));
  };
  useEffect(dataGetter, [pageUrl]);

  return (
    <AppDiv>
      <PageChanging onClick={pageClickHandler}>
        <span>{"\u2b05"}</span>
        <h2>Page {pageNum}</h2>
        <span>{"\u27a1"}</span>
      </PageChanging>

      <CardWrapper>
        {starWarsData.results
          ? starWarsData.results.map(starWar => (
              <Card key={starWar.name} starWar={starWar} />
            ))
          : null}
      </CardWrapper>
    </AppDiv>
  );
};

export default App;
