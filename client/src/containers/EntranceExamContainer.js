import { connect } from "react-redux";
import EntranceExam from "../components/EntranceExam";
import {addTest,loadTests} from "../actions";

function mapDispatchToProps(dispatch) {
  return { 
    addTest(test) {
      dispatch(addTest(test));
      
    },
    loadTests() {
      dispatch(loadTests());
    },

    // setMealTypes(arrayOfOptions) {
    //   dispatch(setMealTypes(arrayOfOptions));
    // }


  };
}
// function mapDispatchtoProps (dispatch){}
export default connect(null,mapDispatchToProps)(EntranceExam);

