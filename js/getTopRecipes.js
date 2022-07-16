const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
const recipesContainer = document.querySelector(".recipes");

async function getTopRecipes() {
  const response = await fetch(url);

  const results = await response.json();

  const recipes = results.meals;

  console.log(recipes);

  for (let i = 0; i < recipes.length; i++) {
    recipesContainer.innerHTML += `
    <div class="recipe">
        <img src="${recipes[i].strMealThumb}" alt"picture of ${recipes[i].strMeal}" style="width:100%">
        <h4><span class="bold">Recipe:</span><br>${recipes[i].strMeal}</h4>
        <h4><span class="bold">Ingredients:</span>
          <br>${recipes[i].strIngredient1}  ${recipes[i].strMeasure1}
          <br>${recipes[i].strIngredient2}  ${recipes[i].strMeasure2}
          <br>${recipes[i].strIngredient3}  ${recipes[i].strMeasure3}
          <br>${recipes[i].strIngredient4}  ${recipes[i].strMeasure4}
        </h4>
        <a href="details.html?id=${recipes[i].idMeal}"><button class="recipebtn">Read More!</button></a>
    </div>`;
  }
}

getTopRecipes();
