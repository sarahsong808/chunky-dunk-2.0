import React from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const APP_ID = "94743f0c";
  const APP_KEY = "01451fab7300ac70516120de63f295cd";

  const url = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //wait for info before loading javascript 
  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result);
  }
//once you click this button, you will reload page so preventDefault will stop this
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <div className="App">
      <h1> Chunky Dunk </h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Search Recipes" autoComplete="off" />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}

export default App;
