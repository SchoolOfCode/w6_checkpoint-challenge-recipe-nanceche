let foodToSearch = null;
let inputValue = null;
const YOUR_APP_ID = "226b1ec4";
const YOUR_APP_KEY = "a44fbda169b8fd8f4e12cc530240086f";
let label = null;

const requestUrl = `https://api.edamam.com/search?q=kale&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
  return foodToSearch;
}

async function fetchRecipe() {
  //--- write your code below ---
  //--- write your code above ---
  const response = await fetch(
    `https://api.edamam.com/search?q=${foodToSearch}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  );
  let data = await response.json();
  console.log(data);
  let dataResult = data.hits[0];
  console.log(dataResult);
  label = dataResult.recipe.label;
  console.log(label);

  function changeLabel(label) {
    let aTag = document.getElementById("recipe-label");
    aTag.innerHTML = label;
    console.log(label);
    console.log(aTag.innerHTML);
  }
  changeLabel(label);
}

// function changeLabel(label) {
//   let aTag = document.getElementById("recipe-label");
//   aTag.innerHTML = label;
//   console.log(label);
//   console.log(aTag.innerHTML);
// }
// changeLabel(label);
//take in the input value

//add value to the url

// let inputValue2 = document.querySelector('[aria-label="food-input]');
// function practice() {
//   inputValue = document.querySelector("#food-input").value;
// }

// let button = document.querySelector("#recipe-button");
// button.addEventListener("click", fetchRecipe);
