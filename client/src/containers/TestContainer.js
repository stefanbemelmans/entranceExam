import { connect } from "react-redux";
import {deleteTest, loadTests} from "../actions";
import Test from "../components/TestForm";

function mapDispatchToProps(dispatch) {
  return {
    deleteTest(id) {
      dispatch(deleteTest(id));
    },
    loadTests() {
      dispatch(loadTests());
    }
  };
}

// function mapDispatchtoProps (dispatch){}
export default connect(null, mapDispatchToProps)(Test);
