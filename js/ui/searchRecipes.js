import { renderRecipes } from "./renderRecipes.js";

export function searchRecipes(recipes) {
  const errordiv = document.querySelector(".error");
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredRecipes = recipes.filter(function (recipe) {
      if (recipe?.strIngredient1?.toLowerCase().startsWith(searchValue)) {
        return true;
      }
      if (recipe?.strIngredient2?.toLowerCase().startsWith(searchValue)) {
        return true;
      }
      if (recipe?.strIngredient3?.toLowerCase().startsWith(searchValue)) {
        return true;
      }
      if (recipe?.strIngredient4?.toLowerCase().startsWith(searchValue)) {
        return true;
      }
      if (recipe?.strIngredient5?.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    if (filteredRecipes.length === 0) {
      errordiv.innerHTML = `<h1>No Recipe with the ingredient: ${searchValue}</h1>`;
    }

    console.log(filteredRecipes);

    renderRecipes(filteredRecipes);
  };
}
