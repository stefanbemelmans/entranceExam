import React, {Component} from "react";
import PropTypes from "prop-types";
import TypingTest from "./TypingTest";
// import MealTypes from "./MealTypes";
import {withRouter} from "react-router-dom";

export default class TestForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = 
    {
      fName: "",
      lName: "",
      phone: "",
      test1: "",
      test2: "",
      code1Desc: "",
      code2Desc: "",
      growthMind: "",
      // mTypes: [],
      typingTest: {}
    };

    this.baseState = this.state;
    
    // this.setMealTypes = this.setMealTypes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentDidMount() {
    this.setState(this.props.test);
  }

  handleSubmit(e) {
    e.preventDefault();
    const test = this.state;
    this.props.submitTest(test);
   
    // this.props.history.push("/");
  }
  
  setTest1(e) {
    
    console.log(e.target.value, e.target.name);
    this.setState({
      test1: e.target.value
    });
  }
  
  setTest2(e) { 
    console.log(e.target.value, e.target.name);
    this.setState({
      test2: e.target.value
    });
  }
 

  erase() {
    this.setState(this.baseState);
    // window.location.reload();
  }
  
  render() {
    
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>Austin Coding Academy Admissions Exam</h1>
            <h3>Please complete the following Admissions exam to be considered for acceptance into Austin Coding Academy. 
              </h3>

            <div>
                First Name: 
                  <input value={this.state.fName} onChange={(e) => {
                    
                    this.setState({
                      fName: e.target.value 
                    });
                    console.log(this.state.fName);
                  } 
                  } />

                Last Name: 
                  <input value={this.state.lName} onChange={(e) => {
                    
                    this.setState({
                      lName: e.target.value 
                    });
                    console.log(this.state.lName);
                  } 
                  } />

                Phone: 
                  <input value={this.state.phone} onChange={(e) => {
                    
                    this.setState({
                      phone: e.target.value 
                    });
                    console.log(this.state.phone);
                  } 
                  } />
            </div>
            
                  
            <div>
              <div className="test1">
                <p>Jamie’s cellular-phone company offers a plan that allows 300 minutes of use for $29.95 per/
                     month and charges $0.19 for each additional minute. All prices include tax and fees. Jamie/
                      has budgeted $50 per month for calls on her cellular phone. What is the maximum number of/
                       minutes that she can use her cellular phone each month without spending more than $50? 
                       </p> 
                       
                <div className="test1Ans">
                  <input onChange={(e) => this.setTest1(e.target.value)} name="test1" type="radio" value="A" />405 min
                  <input onChange={(e) => this.setTest1(e.target.value)} name="test1" type="radio" value="B" />105 min
                  <input onChange={(e) => this.setTest1(e.target.value)} name="test1" type="radio" value="C" />400 min
                  <input onChange={(e) => this.setTest1(e.target.value)} name="test1" type="radio" value="D" />100 min                        
                </div>
            
              </div>

              <div className="test2"> 
                <p>Each word has been assigned a letter. The phrase “I love coding” is represented/ 
                  as “M-X-C”. The phrase “Coding is a great career” is represented as “E-N-F-G-C”./
                   The phrase “I want a career in coding” is represented as “E-O-X-C-I-G”. Which letter/
                    representing the word “coding”?
                    </p>

                <div className="Test2Ans">
                  <input onChange={(e) => this.setTest2(e)} name="test2" type="radio" value="A" />G
                  <input onChange={(e) => this.setTest2(e)} name="test2" type="radio" value="B" />X
                  <input onChange={(e) => this.setTest2(e)} name="test2" type="radio" value="C" />C
                  <input onChange={(e) => this.setTest2(e)} name="test2" type="radio" value="D" />N                        
                </div>
                 
              </div>
             
              <div className="typingTest">
                <h1> Typing Test MoeNuckah!!</h1>
                <TypingTest />
              </div>
              
              <div className="code1Desc">
              <p> Determine what the following code does.</p>
              <img src="../images/code1.png" />
              </div>
              <textarea value={this.state.essay}
                onChange={(e) => {
                  const code1Desc = e.target.value;
                  this.setState({  
                      
                    code1Desc
                    
                  });
                }} />
                <div>
              <button onClick={this.erase} value="Clear Test" />
              <input type="submit" value="Submit Test" />
          

            </div>
          </div>
</div>
        </form>
          
      </div>

  
    );
  }
}

TestForm.propTypes = {
  handleSubmit: PropTypes.func,  
  submitTest: PropTypes.func,
  history: PropTypes.object,
  test: PropTypes.object
  

};


