const recipeForm = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');
const searchInput = document.getElementById('searchInput');

recipeForm.addEventListener('submit', function (e) {
  e.preventDefault(); 
  const title = document.getElementById('recipeTitle').value;
  const ingredients = document.getElementById('ingredients').value;
  const instructions = document.getElementById('instructions').value;

  const recipeDiv = document.createElement('div');
  recipeDiv.classList.add('recipe');
  recipeDiv.innerHTML = `
    <h3>${title}</h3>
    <p><strong>Ingredients:</strong> ${ingredients}</p>
    <p><strong>Instructions:</strong> ${instructions}</p>
    <button class="deleteRecipe">Delete Recipe</button>
  `;

  const deleteBtn = recipeDiv.querySelector('.deleteRecipe');
  deleteBtn.addEventListener('click', function () {
    recipeDiv.remove();
  });

  recipeList.appendChild(recipeDiv);

  recipeForm.reset();
});

function searchRecipes() {
  const filter = searchInput.value.toLowerCase(); 
  const recipes = recipeList.getElementsByClassName('recipe');  

  for (let i = 0; i < recipes.length; i++) {
    const recipeTitle = recipes[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
    
    if (recipeTitle.includes(filter)) {
      recipes[i].style.display = "";  
    } else {
      recipes[i].style.display = "none";  
    }
  }
}
