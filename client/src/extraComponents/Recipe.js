import React,{Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";

class Recipe extends Component {
  constructor(props) {
    super(props);
  }
 
  deleteRecipe() {
    this.props.deleteRecipe(this.props.rec._id);
    this.props.loadMyRecipes();
    
  }
  
  render() {
    const veg = this.props.rec.veg ? "Yes" : "No";
    const vegan = this.props.rec.vegan ? "Yes" : "No";
    const gf = this.props.rec.gf ? "Yes" : "No";
    const types = this.props.rec.mTypes.map(x => x + " " );
    return (
      <div>
        <h3 className="recipeTitle">
          <Link to={"/recipe/" + this.props.rec._id}>{this.props.rec.title }</Link></h3>
        <img src="https://thecatapi.com/api/images/get?format=src&size=small" />
        <ul>
          <li>Servings: {this.props.rec.servings}</li>
          <li>Vegitarian: {veg}</li>
          <li>Vegan: {vegan} </li>
          <li>Gluten Free: {gf}</li>
        </ul>
        Types: {types} <br />
        

        <button id="erase" onClick={() => this.deleteRecipe()}>Erase Recipe</button>
        <br />
        <Link to={"/edit/" + this.props.rec._id}> Edit Recipe </Link>
      </div>
    );
  }
}

Recipe.propTypes = {
  deleteRecipe: PropTypes.func,
  loadMyRecipes: PropTypes.func,
  rec: PropTypes.object,

};

export default withRouter(Recipe);
