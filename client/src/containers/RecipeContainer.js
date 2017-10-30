import { connect } from "react-redux";
import {deleteRecipe, loadMyRecipes} from "../actions";
import Recipe from "../components/Recipe";

function mapDispatchToProps(dispatch) {
  return {
    deleteRecipe(id) {
      dispatch(deleteRecipe(id));
    },
    loadMyRecipes() {
      dispatch(loadMyRecipes());
    }
  };
}

// function mapDispatchtoProps (dispatch){}
export default connect(null, mapDispatchToProps)(Recipe);
