import React, { Component } from "react";
import CreateRecipe from "./containers/CreateRecipeContainer";
import MyRecipeList from "./containers/MyRecipeListContainer";
import RecipeDetails from "./containers/RecipeDetailsContainer";
import EditRecipe from "./containers/EditRecipeContainer";
import PropTypes from "prop-types";
// impor Link from 
import "./App.css";

import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadMyRecipes();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/* <EditRecipe /> */}
            <Switch>
              <Route path="/createRecipe/" component={CreateRecipe} />
              <Route exact path="/edit/:id" component={EditRecipe} />
              <Route path="/recipe/:id" component={RecipeDetails} />
              <Route path="/" component={MyRecipeList} />
            </Switch>
            <Link to="/createRecipe">Create Recipe!</Link><br />
            <Link to="/">Recipe List!</Link>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

App.propTypes = {
  loadMyRecipes: PropTypes.func
};
export default (App);


