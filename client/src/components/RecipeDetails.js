import React, {Component} from "react";
import PropTypes from "prop-types";


export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    const recId = this.props.match.params.id;
    this.props.getRecipe(recId);
    console.log(this.props);
    
    
  }
// getRecipe returns recipe object

  render() {
    const recipe = this.props.recipe; 
    const veg = recipe.veg ? "Yes" : "No";
    const vegan = recipe.vegan ? "Yes" : "No";
    const gf = recipe.gf ? "Yes" : "No";
    const types = recipe.mTypes ? recipe.mTypes.map(x => x) : "";
    return (
      <div>  
        <div className="recipeInfo">
          <h1 className="recipeTitle">{recipe.title}</h1>
      
          <div className="recipeDetails">
            <ul>
              <li>Vegetarian: {veg}</li>
              <li>Vegan: {vegan}</li>
              <li>Gluten Free: {gf}</li>
              <li>Servings: {recipe.servings}</li>
            </ul>
          </div>
        
          <div className="mealTypes">
            {types}
          </div>
          <div className="ingredients">
            <h3>Ingredients:</h3>
            <p>{recipe.ingredients}</p>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
          </div>
        </div>
      </div>
    );
  }
}

RecipeDetails.propTypes = {
  match: PropTypes.object,
  getRecipe: PropTypes.func,
  recipe: PropTypes.object
};
