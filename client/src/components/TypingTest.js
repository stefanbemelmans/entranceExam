import React, {Component} from "react";
// import AddIngredients from "./AddIngredients";
import {withRouter} from "react-router-dom";
// import RecipeForm from "./RecipeForm";
import PropTypes from "prop-types";
import "../css/TypingTest.css";

export default class TypingTest extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      tester: "",
      paragraph: "Type this sentence ExaCtly",
      badWords: [],
      badChars: ""
    };
    this.baseState = this.state;
    this.startTimer = this.startTimer.bind(this);
    this.compStrings = this.compStrings.bind(this);
    // optional longer string for paragraph
    // the employer provides—that’s part of the assessment process, says Diane Samuels, a career coach and image consultant in New York City. 'If you have any concerns, it’s best to ask questions,' she says. 'It shows that you are proactive in seeking advice before moving too far ahead with an assignment, which in a real-life job situation can save time, money and energy.'"

  }

  stopTyping() {
    document.alert("Stop Typing!");
  }
  // compare strings word for word

  compStrings() {
    const badWords = this.state.badWords;

    const splitPar = this.state.paragraph.split(" ");
    console.log(splitPar);
    // input paragrahp

    const splitTester = this.state.tester.split(" ");
    console.log(splitTester);
  // if test word doesn't equal control word go to char comp and record wrong chars.

    for (let i = 0; i < splitTester.length; i++) {
      if (splitTester[i] === splitPar[i]) {
        console.log("yay");
      } else {
        badWords.push(splitTester[i]);
        this.compWords(splitPar[i], splitTester[i]);
      }
    }
    return badWords.length === 0 ? true : badWords;
  }
  compWords(parWd, testWd) {
    const parCharAr = parWd.split("");
    const testCharAr = testWd.split("");
    const parLength = parWd.length;
    const testLength = testWd.length;
    let badChars = this.state.badChars;
    console.log(parCharAr, testCharAr);

    if (testLength > parLength) {
      badChars += testCharAr.slice(parLength).join("");
      console.log(badChars);
    }

    if (testLength < parLength) {
      badChars += parCharAr.slice(testLength);
    }
    for (let j = 0; j < testLength; j++) {

      if (testCharAr[j] !== parCharAr[j]) {
        badChars += testCharAr[j];
        console.log(testCharAr[j] + " tester and para: " + parCharAr[j]);
        console.log("nope");
        console.log(badChars);
      }

      if (testCharAr[j] === parCharAr[j]) {
        console.log("yup");
      }



    }

    console.log(badChars);

    console.log("you wrote " + testWd + " instead of " + parWd);

  }

  startTimer(val) {
    console.log(val);
    if (val === 13) {
      console.log("yaya");
      // setTimeout(this.compStrings, 10000);
      this.compStrings();
      console.log("timerSTarted");
      // count keystrokes on window while timer is running
      // count bakspaces?

    }
  }
  render() {



    return (


      <div>
        <div className="typeThis">
          <p>Type this: </p>
          <h3>{this.state.paragraph}</h3>
        </div>

        <textarea className="TTTextarea" value={this.state.tester} onChange={(e) => {

          this.setState({
            tester: e.target.value
          });
          console.log(this.state.tester);

        }
        } onKeyPress={(e) => this.startTimer(e.charCode)}

        />

      </div>);
      /* //   //<RecipeForm submitRecipe={this.editRecipe} recipe={this.props.recipes.find(x => x._id === this.props.match.params.id)} />

      //   {/* <button onClick={() => this.updateRecipe()}>Save Recipe</button>

      //   <button onClick={() => this.erase()}>Clear Recipe</button> */

  }
}
TypingTest.propTypes = {
  // match: PropTypes.object,
  // recipes: PropTypes.array,
  // recipe: PropTypes.object,
  // updateRecipe: PropTypes.func,
  // loadMyRecipes: PropTypes.func,
  // history: PropTypes.object
}
;
