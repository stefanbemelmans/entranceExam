import { connect } from "react-redux";
import MyRecipeList from "../components/MyRecipeList";
import {deleteRecipe} from "../actions";
import {withRouter} from "react-router-dom";

function mapStateToProps(state) {
  return {
    recipes: state.myRecipes
  };
}
function mapDispatchToProps(dispatch) {
  return { 
    deleteRecipe(id) {
      const action = deleteRecipe(id);
      dispatch(action);
    }
  };
}


// function mapDispatchtoProps (dispatch){}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MyRecipeList));
