import { connect } from "react-redux";
import RecipeDetails from "../components/RecipeDetails";
import {getRecipe} from "../actions";

function mapStateToProps(state) {
  return {
    recipe: state.getRecipeDone
  };
}

function mapDispatchToProps(dispatch) {
  return { 
    getRecipe(id) {
      const action = getRecipe(id);
      dispatch(action);
    }
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(RecipeDetails);
