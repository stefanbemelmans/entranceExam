import {combineReducers} from "redux";

function myRecipes(state = [], action) {
  if (action.type === "MY_RECIPES_LOADED") {
    return action.value;
  }
  return state;
}


function getRecipeDone(state = {}, action) {
  if (action.type === "GET_RECIPE_DONE") {
    return action.value;
  }
  return state;
}



const rootReducer = combineReducers({
  myRecipes, getRecipeDone
});

export default rootReducer;
