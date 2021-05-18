import React, {useEffect, useState} from 'react';
import {Recipe} from './components/Recipe';
import './App.css';

const App = () => {

  const APP_ID = "e1cbe815";
  const APP_KEY = "eb4adfe0c3deaa55689228f0a5c89253";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");
  const [query, setQuery] = useState("chicken");
  //Use effect runs every time an object renders on the page
  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); // wait till response is recieved from API
      let data = await response.json();
      let recipe = data.hits;
      recipe.pop();
      setRecipes(recipe);
    }
    getRecipes(); //Use effect will run this function when it runs
  }, [query]);

  

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getQuery}>
        <input className="search-bar" type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            title={recipe.recipe.label} 
            key={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
