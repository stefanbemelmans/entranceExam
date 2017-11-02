import { connect } from "react-redux";
import TestList from "../components/TestList";
import {deleteTest} from "../actions";
import {withRouter} from "react-router-dom";

function mapStateToProps(state) {
  return {
    tests: state.tests
  };
}
function mapDispatchToProps(dispatch) {
  return { 
    deleteTest(id) {
      const action = deleteTest(id);
      dispatch(action);
    }
  };
}


// function mapDispatchtoProps (dispatch){}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TestList));
