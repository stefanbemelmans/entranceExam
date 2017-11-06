import React, { Component } from "react";
import EntranceExam from "./containers/EntranceExamContainer";
import testList from "./containers/TestListContainer";
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
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/* <EditRecipe /> */}
            <Switch>
              <Route path="/test" component={testList} /> 
              {/* <Route exact path="/edit/:id" component={EditRecipe} /> */}
              {/* <Route path="/tests/:id" component={RecipeDetails} /> */}
              <Route path="/" component={EntranceExam} />
            </Switch>
           
            <Link to="/test">test List!</Link><br />
            <Link to="/">take test!!</Link>
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


