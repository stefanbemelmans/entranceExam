import React, {Component} from "react";
// import AddIngredients from "./AddIngredients";
import {withRouter} from "react-router-dom";
// import RecipeForm from "./RecipeForm";
import PropTypes from "prop-types";

export default class TypingTest extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      result: ""
    };
    this.baseState = this.state;
    this.startTimer = this.startTimer.bind(this);
    this.getResult = this.getResult.bind(this);
    this.paragraph = "Follow any instructions".split(""); 
    //the employer provides—that’s part of the assessment process, says Diane Samuels, a career coach and image consultant in New York City. 'If you have any concerns, it’s best to ask questions,' she says. 'It shows that you are proactive in seeking advice before moving too far ahead with an assignment, which in a real-life job situation can save time, money and energy.'"
    
  }

  
  //control paragrph
  let paragraph = "Type this sentence.";
  
  let splitPar = paragraph.split(" ");
  console.log(splitPar)
  //input paragrahp
  let tester = "sepe this sentence.";
  console.log(tester === paragraph)
  let splitTester = tester.split(" ");
  console.log(splitTester);
  // if test word doesn't equal control word go to char comp and record wrong chars.
  function compare(parWd, testWd) {
    let badChar="";
    parCharAr = parWd.split("");
    testCharAr = testWd.split("");
    parLength = parWd.length;
    testLength = testWd.length;
    console.log(parCharAr, testCharAr);
    
    if(testLength > parLength) {
      badChar += testCharAr.slice(parLength).join("");
      console.log(badChar)
    }
    
    if(testLength < parLength) {
      badChar += parCharAr.slice(testLength)
    }
    for(let j = 0; j < parLength; j ++){
      
      if(testCharAr[j] === parCharAr[j]){
        console.log('yup');
      }
      if(testCharAr[j] !== parCharAr){
        badChar += testCharAr[j];
        console.log('nope');
        console.log(badChar);
        
        
      }
      else{
        
          badChar+=testCharAr[j];
      }
    }
     
      console.log(badChar);
   console.log("you wrote "+ testWd+" instead of "+ parWd);
  
  }
  compare(splitTester[0], splitPar[0]);
  
  for(let i = 0; i<splitTester.length; i ++) {
    if (splitTester[i] === splitPar[i]){
      console.log("yay");
    }
  }
  
  // componentDidMount() {
  //   const recId = this.props.match.params.id;
  //   this.setState({
  //     recipe: this.props.recipes.find(x => x._id === recId)
      
  //   });     
  //   console.log(this.state.recipe); 
   
  // }
  splitParagraph(para) {
    let splitPar = para.split(" ");
    console.log(splitPar);
  }

  // startTimer(val) {  
  //   console.log(val);
  //   if (val === 13) {
  //     console.log("yaya");
  //     setTimeout(this.getResult, 10000);
  //     console.log("timerSTarted");
  //     // count keystrokes on window while timer is running
  //     // count bakspaces?
      

  //     }}
  //   }
  

  getResult() {
    let result = this.state.result;
    result = result.split(" ");
    console.log(result.length);
  }
  //   this.props.updateRecipe(recipe);
  //   this.props.loadMyRecipes();
  //   this.props.history.push("/");
  // }

  render() {
   
    this.splitParagraph(this.paragraph);
   
    return (
     
      
      <div>
        <div className="typeThis">
          <p>Type this: </p>
          <h3>{this.paragraph}</h3>
        </div>

        <textarea value={this.state.result} onChange={(e) => {
                    
          this.setState({
            result: e.target.value 
          });
          console.log(this.state.result);

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
  match: PropTypes.object,
  recipes: PropTypes.array,
  recipe: PropTypes.object,
  updateRecipe: PropTypes.func,
  loadMyRecipes: PropTypes.func,
  history: PropTypes.object
}
;
