import React, { Component } from "react";
import EntranceExam from "./containers/EntranceExamContainer";
import TestList from "./containers/TestListContainer";
// import RecipeDetails from "./containers/RecipeDetailsContainer";
// import EditRecipe from "./containers/EditRecipeContainer";
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
              {/*  <Route path="/createRecipe/" component={CreateRecipe} /> */}
              {/* <Route exact path="/edit/:id" component={EditRecipe} /> */}
              {/* <Route path="/entrance/:id" component={TestDetails} /> */}
              <Route path="/" component={EntranceExam} />
            </Switch>
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


