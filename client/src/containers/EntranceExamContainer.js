import { connect } from "react-redux";
import EntranceExam from "../components/EntranceExam";
import {submitTest,getTests} from "../actions";

function mapDispatchToProps(dispatch) {
  return { 
    submitTest(test) {
      dispatch(submitTest(test));
      
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

