import {combineReducers} from "redux";

function getTests(state = [], action) {
  if (action.type === "TESTS_LOADED") {
    return action.value;
  }
  return state;
}


function getTestsDone(state = {}, action) {
  if (action.type === "TESTS_LOADED") {
    return action.value;
  }
  return state;
}



const rootReducer = combineReducers({
  getTests, getTestsDone
});

export default rootReducer;
