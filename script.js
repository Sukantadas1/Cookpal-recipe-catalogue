const recipes = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

function renderRecipes(recipes) {
  const container = document.getElementById("recipeContainer");
  container.innerHTML = "";

  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Type: ${recipe.type}</p>
            <p>Time: ${recipe.time}</p>
            <p>Rating: ${recipe.rating}</p>
            <button onclick="toggleLike(${recipes.indexOf(recipe)})">
                ${recipe.isLiked ? "Unlike" : "Like"}
            </button>
        `;

    container.appendChild(card);
  });
}

function filterRecipes() {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery)
  );
  renderRecipes(filteredRecipes);
}

function filterByType(type) {
  const filteredRecipes =
    type === "all" ? recipes : recipes.filter((recipe) => recipe.type === type);
  renderRecipes(filteredRecipes);
}

function filterByRating(filter) {
  let filteredRecipes;

  if (filter === "above45") {
    filteredRecipes = recipes.filter((recipe) => recipe.rating > 4.5);
  } else if (filter === "below40") {
    filteredRecipes = recipes.filter((recipe) => recipe.rating < 4.0);
  }

  renderRecipes(filteredRecipes);
}

function toggleLike(index) {
  recipes[index].isLiked = !recipes[index].isLiked;
  renderRecipes(recipes);
}

// Toggle Drawer
const drawer = document.getElementById("drawer");
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    drawer.style.display = "none";
  }
});

// Toggle drawer visibility on small screens
function toggleDrawer() {
  drawer.style.display = drawer.style.display === "none" ? "flex" : "none";
}

// Initial render
renderRecipes(recipes);
