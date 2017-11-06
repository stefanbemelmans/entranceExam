import { connect } from "react-redux";
import {deleteTest, getTests, submitTest} from "../actions";
import TestForm from "../components/TestForm";

function mapDispatchToProps(dispatch) {
  return {
    submitTest(test) {
      dispatch(submitTest(test));
    },
    deleteTest(id) {
      dispatch(deleteTest(id));
    },
    getTests() {
      dispatch(getTests());
    }
  };
}


// function mapDispatchtoProps (dispatch){}
export default connect(null, mapDispatchToProps)(TestForm);
