import React, {Component} from "react";
// import AddIngredients from "./AddIngredients";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import RecipeForm from "./RecipeForm";

export default class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.addrecipe = this.addrecipe.bind(this);   
  }

  addrecipe(recipe) {
    console.log(recipe);
    this.props.createRecipe(recipe);
    this.props.loadMyRecipes();
    this.props.history.push("/");
  }

  render() {
    return <RecipeForm submitRecipe={this.addrecipe} recipe={{}} />;
  
  }
}
