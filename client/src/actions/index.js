export function getTests() {
  return function (dispatch) {
    fetch("/tests")
      .then( (response) => {
        return response.json();
      }).then((tests) => {
        dispatch(getTestsDone(tests));
      });
  };
}
function getTestsDone(tests) {
  return {
    type: "GET_TESTS_DONE",
    value: tests
  };
}
export function getTest(id) {
  return function (dispatch) {
    fetch("/tests/" + id)
      .then( (response) => {
        return response.json();
      }).then((test) => {
        dispatch(getTestDone(test));
      });
  };
}
function getTestDone(test) {
  return {
    type: "GET_TEST_DONE",
    value: test
  };
}

export function submitTest(test) {
  return function (dispatch) {
    fetch("/tests", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(test)
    })
    .then(() => {
      console.log("submitting or trying too.");
      
      // return dispatch(getTests());
    });
  };
}

export function deleteTest(id) {
  console.log("trying to delete");
  return function (dispatch) {
    fetch("/tests/" + id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    }).then(() => dispatch(getTests()));
  };
}

export function updateRecipe(recipe) {
  return function (dispatch) {
    console.log(recipe);
    fetch("/tests/" + recipe._id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(recipe)
    })
    .then(console.log("response"),() => {
      return dispatch(getTests());
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
