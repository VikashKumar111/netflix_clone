import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hey clever programmers we are going to build netflix clone today</h1>
      <Row title="NETFLIX_ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

     
    </div>
  );
}

export default App;
