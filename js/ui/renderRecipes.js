export function renderRecipes(recipes) {
  const recipesContainer = document.querySelector(".recipes");
  recipesContainer.innerHTML = "";

  recipes.forEach(function (recipes) {
    recipesContainer.innerHTML += `
    <div class="recipe">
        <img src="${recipes.strMealThumb}" alt"Picture of ${recipes.strMeal}" style="width:100%">
        <h4><span class="bold">Recipe:</span><br>${recipes.strMeal}</h4>
        <h4><span class="bold">Ingredients:</span>
          <br>${recipes.strIngredient1}  ${recipes.strMeasure1}
          <br>${recipes.strIngredient2}  ${recipes.strMeasure2}
          <br>${recipes.strIngredient3}  ${recipes.strMeasure3}
          <br>${recipes.strIngredient4}  ${recipes.strMeasure4}
        </h4>
        <a href="details.html?id=${recipes.idMeal}"><button class="recipebtn">Read More!</button></a>
    </div>`;
  });
}
