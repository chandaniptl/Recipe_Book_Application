let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
let editIndex = -1; // -1 means add mode, any other value means edit mode

// Save to localStorage
function saveRecipes() {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

// Display recipe cards
function displayRecipes(filteredRecipes = recipes) {
  const list = document.getElementById("recipeList");
  list.innerHTML = "";

  filteredRecipes.forEach((recipe, index) => {
    list.innerHTML += `
      <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" />
        <h3>${recipe.title}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
        <div class="card-buttons">
          <button onclick="editRecipe(${index})">Edit</button>
          <button onclick="deleteRecipe(${index})">Delete</button>
        </div>
      </div>
    `;
  });
}

// Handle form submission (Add or Edit)
document.getElementById("recipeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();
  const instructions = document.getElementById("instructions").value.trim();
  const image = document.getElementById("image").value.trim();
  const cuisine = document.getElementById("cuisine").value;

  if (title && ingredients && instructions && image && cuisine) {
    const newRecipe = { title, ingredients, instructions, image, cuisine };

    if (editIndex === -1) {
      // Add mode
      recipes.push(newRecipe);
    } else {
      // Edit mode
      recipes[editIndex] = newRecipe;
      editIndex = -1;
      document.querySelector("#recipeForm button[type='submit']").textContent = "Add Recipe";
    }

    saveRecipes();
    displayRecipes();
    this.reset(); // Clear form
  }
});

// Edit a recipe
function editRecipe(index) {
  const recipe = recipes[index];

  document.getElementById("title").value = recipe.title;
  document.getElementById("ingredients").value = recipe.ingredients;
  document.getElementById("instructions").value = recipe.instructions;
  document.getElementById("image").value = recipe.image;
  document.getElementById("cuisine").value = recipe.cuisine;

  editIndex = index;
  document.querySelector("#recipeForm button[type='submit']").textContent = "Update Recipe";
}

// Delete a recipe
function deleteRecipe(index) {
  if (confirm("Are you sure you want to delete this recipe?")) {
    recipes.splice(index, 1);
    saveRecipes();
    displayRecipes();
  }
}

// Search and filter recipes
document.getElementById("searchInput").addEventListener("input", function () {
  filterAndDisplay();
});

document.getElementById("filterCuisine").addEventListener("change", function () {
  filterAndDisplay();
});

function filterAndDisplay() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const selectedCuisine = document.getElementById("filterCuisine").value;

  const filtered = recipes.filter((recipe) => {
    const matchesText =
      recipe.title.toLowerCase().includes(searchText) ||
      recipe.ingredients.toLowerCase().includes(searchText);
    const matchesCuisine = selectedCuisine ? recipe.cuisine === selectedCuisine : true;
    return matchesText && matchesCuisine;
  });

  displayRecipes(filtered);
}

// Initial render
displayRecipes();
