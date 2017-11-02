import { connect } from "react-redux";
import EditRecipe from "../components/EditRecipe";
import {loadMyRecipes, updateRecipe} from "../actions";
import {withRouter} from "react-router-dom";

function mapStateToProps(state) {
  return {
    recipes: state.myRecipes
    // recipe: state.getRecipeDone
  };
}
function mapDispatchToProps(dispatch) {
  return { 
    updateRecipe(recipe) {
      const action = updateRecipe(recipe);
      dispatch(action);
    },
    loadMyRecipes() {
      const action = loadMyRecipes();
      dispatch(action);
    }
    // getRecipe(id) {
    //   const action = getRecipe(id);
    //   dispatch(action);
    // }
    
  };
 
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditRecipe));
