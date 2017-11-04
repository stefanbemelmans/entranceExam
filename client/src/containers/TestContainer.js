import { connect } from "react-redux";
import {deleteTest, getTests} from "../actions";
import Test from "../components/TestForm";

function mapDispatchToProps(dispatch) {
  return {
    deleteTest(id) {
      dispatch(deleteTest(id));
    },
    getTests() {
      dispatch(getTests());
    }
  };
}

// function mapDispatchtoProps (dispatch){}
export default connect(null, mapDispatchToProps)(Test);
