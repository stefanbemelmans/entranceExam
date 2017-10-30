import { connect } from "react-redux";
import CreateRecipe from "../components/CreateRecipe";
import {createRecipe,loadMyRecipes, setMealTypes} from "../actions";

function mapDispatchToProps(dispatch) {
  return { 
    createRecipe(recipe) {
      dispatch(createRecipe(recipe));
      
    },
    loadMyRecipes() {
      dispatch(loadMyRecipes());
    },

    setMealTypes(arrayOfOptions) {
      dispatch(setMealTypes(arrayOfOptions));
    }


  };
}
// function mapDispatchtoProps (dispatch){}
export default connect(null,mapDispatchToProps)(CreateRecipe);

