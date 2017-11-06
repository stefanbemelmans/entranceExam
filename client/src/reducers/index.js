import {combineReducers} from "redux";

function getTests(state = [], action) {
  if (action.type === "GET_TESTS_DONE") {
    return action.value;
  }
  return state;
}


function getTestsDone(state = [], action) {
  if (action.type === "GET_TESTS_DONE") {
    return action.value;
  }
  return state;
}

// function getTest(state = {}, action) {
//   if (action.type === "GET_TEST_DONE") {
//     return action.value;
//   }
//   return state;
// }

// function getTestDone(state = {}, action) {
//   if (action.type === "GET_TEST_DONE") {
//     return action.value;
//   }
//   return state;
// }

const rootReducer = combineReducers({
  getTests, getTestsDone
});

export default rootReducer;
