export function loadMyRecipes() {
  return function (dispatch) {
    fetch("/recipes")
      .then( (response) => {
        return response.json();
      }).then((recipes) => {
        dispatch(myRecipesLoaded(recipes));
      });
  };
}
function myRecipesLoaded(recipes) {
  return {
    type: "MY_RECIPES_LOADED",
    value: recipes
  };
}
export function getRecipe(id) {
  return function (dispatch) {
    fetch("/recipes/" + id)
      .then( (response) => {
        return response.json();
      }).then((recipe) => {
        dispatch(getRecipeDone(recipe));
      });
  };
}
function getRecipeDone(recipe) {
  return {
    type: "GET_RECIPE_DONE",
    value: recipe
  };
}

export function createRecipe(recipe) {
  return function (dispatch) {
    fetch("/recipes", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(recipe)
    })
    .then(() => {
      return dispatch(loadMyRecipes());
    });
  };
}

export function deleteRecipe(id) {
  console.log("trying to delete");
  return function (dispatch) {
    fetch("/recipes/" + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    }).then(() => dispatch(loadMyRecipes()));
  };
}

export function updateRecipe(recipe) {
  return function (dispatch) {
    console.log(recipe);
    fetch("/recipes/" + recipe._id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(recipe)
    })
    .then(console.log("response"),() => {
      return dispatch(loadMyRecipes());
    });
  };
}

// export function setMealTypes(arrayOfOptions) {
//   const arr = [];

//   for (let i = 0; i < arrayOfOptions.length; i++) {
//     arr.push(arrayOfOptions[i].text);
//   }
//   return arr;
// }
