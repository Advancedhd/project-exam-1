const recipesContainer = document.querySelector(".recipedetailpage");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;

async function getRecipesDetails() {
  const response = await fetch(url);

  const results = await response.json();

  const recipes = results.meals;

  console.log(recipes);

  for (let i = 0; i < recipes.length; i++) {
    console.log(recipes[i].idMeal);

    recipesContainer.innerHTML += `
      <div class="detailContainer">
        <h1><span class="detailbold">Recipe:</span>  ${recipes[i].strMeal}</h1>
        <div class="recipeContainer"> 
          <img class="details-image" src="${recipes[i].strMealThumb}">
          <h2><span class="detailbold">Ingredients:</span>
            <p class="ingredients">
                ${recipes[i].strIngredient1}:  ${recipes[i].strMeasure1}
                <br>${recipes[i].strIngredient2}:  ${recipes[i].strMeasure2}
                <br>${recipes[i].strIngredient3}:  ${recipes[i].strMeasure3}
                <br>${recipes[i].strIngredient4}:  ${recipes[i].strMeasure4}
            </p>
          </h2>
          <h2><span class="detailbold">How to Make:  </span><p class="htmingredients">${recipes[i].strInstructions}</p></h2>
          
          </div>
      </div>`;
  }
}

getRecipesDetails();
