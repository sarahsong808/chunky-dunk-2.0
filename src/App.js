import React from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const APP_ID = "94743f0c";
  const APP_KEY = "01451fab7300ac70516120de63f295cd";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  
  return (
    <div className="App">
      <h1> Chunky Dunk </h1>
    </div>
  );
}

export default App;
