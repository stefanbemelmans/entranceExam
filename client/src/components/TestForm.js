import React, {Component} from "react";
import PropTypes from "prop-types";
import TypingTest from "./TypingTest";
// import MealTypes from "./MealTypes";
import {withRouter} from "react-router-dom";
import "../css/TestForm.css";

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

      <div className="body">
        <form onSubmit={this.handleSubmit}>
          <div>

            <div className="tfHeader">
              <svg className="ACALogo" xmlns="http://www.w3.org/2000/svg" width="564.56" height="521.232" viewBox="0 0 564.56049 521.23248"><defs>
                <clipPath id="a"><path d="M0 500h500V0H0v500z" /></clipPath>
                </defs><path d="M191.176 253.88l-9.709-31.099h-.302l-9.71 31.099h19.721zm7.433 24.121h-34.59l-5.458 17.446h-30.19l39.139-107.71h27.611l38.99 107.71h-30.04l-5.463-17.446z" fill="#fff" />
                <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 -30.662 571.98)">
                <path d="M210.24 264.188c0 24.518 16.261 44.542 45.024 44.542 11.773 0 25.365-4.975 35.076-16.748l-16.87-14.444c-3.642 4.128-10.194 8.983-18.206 8.983-10.679 0-20.754-7.767-20.754-22.333 0-11.77 7.768-21.967 20.754-21.967 6.796 0 14.08 3.642 18.206 8.74l16.87-14.564c-7.404-9.103-19.783-16.385-35.076-16.385-24.03 0-45.025 15.413-45.025 44.176m132.039-9.708l-7.767 24.88h-.242l-7.768-24.88h15.777zm5.946-19.297h-27.67l-4.368-13.957h-24.152l31.311 86.17h22.09l31.191-86.17h-24.032l-4.37 13.957z" fill="#fff"/><path d="M407.007 316.65zm.001 0c5.1-15.978 7.796-32.878 7.796-50.227 0-90.678-73.773-164.45-164.451-164.45s-164.45 73.772-164.45 164.45c0 56.82 28.78 108.87 76.98 139.233l-32.707 51.928C64.023 415.916 24.53 344.456 24.53 266.424c0-124.522 101.305-225.826 225.823-225.826 34.633 0 67.459 7.857 96.82 21.851 81.087 81.858 89.826 181.18 59.835 254.201" fill="#f8b232"/><path d="M476.178 266.423c0 78.033-39.493 149.493-105.646 191.161l-32.708-51.928c33.483-21.093 57.581-52.655 69.183-89.006 29.991-73.022 21.253-172.343-59.834-254.2 76.204 36.317 129.005 114.086 129.005 203.973" fill="#fddca9"/></g></svg>
              <h1 className="tfHeaderText">
                Austin Coding Academy Admissions Exam
              </h1>
            </div>
            <h3 className="tfIntro">
              Please complete the following Admissions exam
              to be considered for acceptance into Austin Coding Academy.
            </h3>

            <div className="tfContact">
              <h3 className="problemSpacer">
                Personal Information
              </h3>
              <div className="textSpacer">
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
            </div>
            <br />
            <hr />

            <div>
              <div className="test1">
                <h3 className="problemSpacer">
                  Problem 1
                </h3>
                <p className="textSpacer">Jamie’s cellular-phone company offers a plan that allows 300 minutes
                  of use for $29.95 per/ month and charges $0.19 for each additional
                  minute. All prices include tax and fees. Jamie/ has budgeted
                  $50 per month for calls on her cellular phone. What is the maximum number of/
                  minutes that she can use her cellular phone each month without
                  spending more than $50?
                </p>

                <div className="test1Ans textSpacer">
                  <input onChange={(e) => this.setTest1(e.target.value)}
                    name="test1" type="radio" value="A" /> 405 min
                  <input onChange={(e) => this.setTest1(e.target.value)}
                    name="test1" type="radio" value="B" />105 min
                  <input onChange={(e) => this.setTest1(e.target.value)}
                    name="test1" type="radio" value="C" />400 min
                  <input onChange={(e) => this.setTest1(e.target.value)}
                    name="test1" type="radio" value="D" />100 min
                </div>

              </div>

              <div className="test2">
                <h3 className="problemSpacer">
                  Problem 2
                </h3>
                <p className="textSpacer">
                  Each word has been assigned a letter. The phrase “I love coding” is represented/
                  as “M-X-C”. The phrase “Coding is a great career” is represented as “E-N-F-G-C”./
                  The phrase “I want a career in coding”
                  is represented as “E-O-X-C-I-G”. Which letter/
                  representing the word “coding”?
                </p>

                <div className="Test2Ans textSpacer">
                  <input onChange={(e) => this.setTest2(e)} name="test2" type="radio" value="A" />G
                  <input onChange={(e) => this.setTest2(e)} name="test2" type="radio" value="B" />X
                  <input onChange={(e) => this.setTest2(e)} name="test2" type="radio" value="C" />C
                  <input onChange={(e) => this.setTest2(e)} name="test2" type="radio" value="D" />N
                </div>

              </div>

              <div className="typingTest">
                <h3 className="problemSpacer">
                  Problem 3
                </h3>
                <TypingTest />
              </div>

              <div className="code1Desc ">
                <h3 className="problemSpacer">
                  Problem 4
                </h3>
                <p className="textSpacer"> Determine what the following code does.</p>
                <img src="./code1.png" />
              </div>
              <textarea value={this.state.essay}
                onChange={(e) => {
                  const code1Desc = e.target.value;
                  this.setState({

                    code1Desc

                  });
                }} />
              <div className="textSpacer">
                <button onClick={this.erase} value="Clear Test" />
                <input className="submitButton" type="submit" value="Submit Test" />
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
