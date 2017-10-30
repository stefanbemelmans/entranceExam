import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadMyRecipes} from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadMyRecipes() {
      dispatch(loadMyRecipes());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
