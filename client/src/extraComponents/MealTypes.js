import React from "react";
import PropTypes from "prop-types";
const mealTypes = [
  "breakfast",
  "lunch",
  "dinner",
  "dessert",
  "snack"
];

// function onChange(e) {
//   console.log(e.target.selectedOptions);
  
//   props.onChange(e.target.selectedOptions);

// }

const MealTypes = (props) => {

  return (
    // <form>
    //   <label>
    <select value={props.value} multiple onChange={(e) => props.setMealTypes(e.target.selectedOptions)}>
      {
        mealTypes.map((meal, index) => {
          
          return <option value={meal.toUpperCase()} key={index}>{meal.toUpperCase()}</option>;
        }
      )}
      }
    </select>

         
  );

};
// value={meal} selected={props.types.includes(meal) ? "selected" : false}
export default MealTypes;

MealTypes.propTypes = {
  setMealTypes: PropTypes.func,  
  value: PropTypes.array || PropTypes.string ,
  history: PropTypes.object,
  recipe: PropTypes.object
  

};
