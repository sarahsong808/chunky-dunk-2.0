import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Recipe from './components/Recipe.jsx';
import logo from './assets/logo.png';
import Alert from './components/Alert.jsx';

const App = () => {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const APP_ID = "94743f0c";
  const APP_KEY = "01451fab7300ac70516120de63f295cd";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //wait for info before loading javascript 
  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert('Recipe does not exist')
      }
      setRecipes(result.data.hits);
      console.log(result);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill out search")
    }
  }
  //once you click this button, you will reload page so preventDefault will stop this
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className="App">
      {/* <div className="search-bar"> */}
      <img src={logo} alt="logo" className="logo" />
      <form className="search-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Search Recipes" autoComplete="off" onChange={onChange} value={query} />
        <input type="submit" value="search" />
        {alert !== "" && <Alert alert={alert} />}
      </form> 
      {/* </div> */}
      <div className="recipes">
        {recipes !== [] && recipes.map(recipe => <Recipe recipe={recipe} key={uuidv4()} />)}
      </div>
    </div >
  );
}

export default App;
