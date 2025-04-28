// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"

const baseEndpoint = "https://recipes.beginnerjavascript.com/api";

async function fetchRecipe(query) {
    const response = await fetch(`${baseEndpoint}?q=${query}`);
    const data = await response.json();
    console.log(data);
}

fetchRecipe("Pizza");