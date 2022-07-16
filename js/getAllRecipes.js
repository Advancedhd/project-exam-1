import { renderRecipes } from "./ui/renderRecipes.js";
import { searchRecipes } from "./ui/searchRecipes.js";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";

async function getAllRecipes() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const recipes = results.meals;

    console.log(recipes);

    renderRecipes(recipes);
    searchRecipes(recipes);
  } catch (error) {
    console.log(error);
  }
}

getAllRecipes();
