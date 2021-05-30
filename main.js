let foodToSearch = null;
let inputValue = null;
const YOUR_APP_ID = "226b1ec4";
const YOUR_APP_KEY = "a44fbda169b8fd8f4e12cc530240086f";
const resultsSection = document.getElementById("results");
let data = null;
let language = null;

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
  let { hits } = await response.json();

  //array of recipes
  //print each recipe in array
  //for loop as long as length
  //for each item use display function
  console.log(hits);
  for (let i = 0; i < hits.length; i++) {
    displayRecipeResults(hits[i].recipe);
  }
}

function displayRecipeResults(recipe) {
  console.log(recipe);
  let div = document.createElement("div");
  div.setAttribute("class", "imageContainer");

  //creating image tag and appending image to div
  let image = document.createElement("img");
  image.setAttribute("src", recipe.image);
  div.appendChild(image);

  //creating label, appending to div tag
  let label = recipe.label;
  let aTag = document.createElement("a");
  aTag.innerHTML = label;
  aTag.setAttribute("href", recipe.url);
  div.appendChild(aTag);

  //appending div to results section
  resultsSection.appendChild(div);
}

// let ingredients=
// async function getTranslation(element) {
//   let response = await fetch(
//     "https://google-translate1.p.rapidapi.com/language/translate/v2",
//     {
//       method: "POST",
//       headers: {
//         "content-type": "application/x-www-form-urlencoded",
//         "accept-encoding": "application/gzip",
//         "x-rapidapi-key": "77199772cemsh7909a12b1b2c197p1a192cjsn8e11f888fc83",
//         "x-rapidapi-host": "google-translate1.p.rapidapi.com",
//       },
//       body: {
//         q: "Hello, world!",
//         target: "es",
//         source: "en",
//       },
//     }
//   );
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
// }

// function handleTranslationInput() {
//   languageToSearch = document.querySelector("#translation").value;
//   return languageToSearch;
// }
// function handleTranslationClick() {
//   getTranslation(languageToSearch);
// }
