import { connect } from "react-redux";
import EntranceExam from "../components/EntranceExam";
import {subTest,getTests} from "../actions";

function mapDispatchToProps(dispatch) {
  return { 
    subTest(test) {
      dispatch(subTest(test));
      
    },
    getTests() {
      dispatch(getTests());
    },

    // setMealTypes(arrayOfOptions) {
    //   dispatch(setMealTypes(arrayOfOptions));
    // }


  };
}
// function mapDispatchtoProps (dispatch){}
export default connect(null,mapDispatchToProps)(EntranceExam);

