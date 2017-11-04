import React,{Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";

class Test extends Component {
  constructor(props) {
    super(props);
  }
 
  deleteTest() {
    this.props.deleteTest(this.props.rec._id);
    this.props.getTests();
    
  }
  
  render() {
    const fName = this.props.test.fName;
    const lName = this.props.test.lName;
    const phone = this.props.test.phone;
    //const types = this.props.test.mTypes.map(x => x + " " );
    return (
      <div>
        <h3 className="TestResults">
          <Link to={"/entrance/" + this.props.test._id}>{this.props.test.fName }</Link></h3>
        <img src="https://thecatapi.com/api/images/get?format=src&size=small" />
        <h2>Test Results!</h2>
        <ul>
          <li>{fName}</li>
          <li>{lName>}</li>
          <li>{phone}</li>
        </ul>


        <button id="erase" onClick={() => this.deleteTest()}>Erase Test</button>
        <br />
        {/* <Link to={"/edit/" + this.props.test._id}> Edit Test </Link> */}
      </div>
    );
  }
}

Test.propTypes = {
  deleteTest: PropTypes.func,
  loadMyTests: PropTypes.func,
  test: PropTypes.object,

};

export default withRouter(Recipe);
