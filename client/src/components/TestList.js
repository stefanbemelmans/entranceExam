import React, {Component} from "react";
// import Link from "react-router-dom";
import Test from "../containers/TestContainer";
import PropTypes from "prop-types";

export default class TestList extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {   
    const tests = this.props.tests.map(function (test, i) {
    
      return (
        <Test key={i} test={test} />
      );  
    } 
     
    ); 
   
  
    return (
      <div>
        <div className="recListHeader">
          <h1> Tests List </h1>
         
        </div>
        <div className="recipeList">
          
          {tests}
          
        </div>
      </div>
    );
  }
}

TestList.propTypes = {
  tests: PropTypes.array
}; 

// getIndRec(id) {
//   //let recBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{id}/information?includeNutrition=false";
//   let recBaseUrl =
//     "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
//   let recId = id;
//   let recEndUrl = "/information?includeNutrition=false";

//   fetch(recBaseUrl + recId + recEndUrl, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
//     }
//   }).then(response => {
//     console.log(response);
//     return response.json().then(data => {
//       var recIng = data.extendedIngredients.map(ing => ing.originalString);
//       var instructions = data.instructions;
//       this.setState({
//         instructions: {
//           ...this.state.instructions,
//           [id]: { recIng, instructions }
//         }
//       });
//       console.log(data);
//     });
//   });
// }
