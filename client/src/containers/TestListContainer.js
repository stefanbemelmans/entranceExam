import { connect } from "react-redux";
import TestList from "../components/TestList";
import {deleteTest, getTests} from "../actions";
import {withRouter} from "react-router-dom";

function mapStateToProps(state) {
  return {
    tests: state.getTestsDone
  };
}
function mapDispatchToProps(dispatch) {
  return { 
    deleteTest(id) {
      const action = deleteTest(id);
      dispatch(action);
    },
    getTests() {
      dispatch(getTests());
    }
  };
}


// function mapDispatchtoProps (dispatch){}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TestList));
