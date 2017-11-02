import React, {Component} from "react";
import PropTypes from "prop-types";
// import MealTypes from "./MealTypes";
// import {withRouter} from "react-router-dom";

export default class TestForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = 
    {
    
      test1: "",
      test2: "",
      boolean: false,
      boolean2: false,
      boolean3: false,
      // mTypes: [],
      typingTest: {},
      essay: ""
    };

    this.baseState = this.state;
    
    // this.setMealTypes = this.setMealTypes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentDidMount() {
    this.setState(this.props.recipe);
  }

  handleSubmit(e) {
    e.preventDefault();
    const test = this.state;
    this.props.addTest(test);
   
    // this.props.history.push("/");
  }
  
  
  // setMealTypes(arrayOfOptions) {
  //   const arr = [];
  //   console.log(arrayOfOptions);
  //   for (let i = 0; i < arrayOfOptions.length; i++) {
  //     arr.push(arrayOfOptions[i].text);
  //   }
  //   this.setState({
  //     mTypes: arr
  //   });
  
  // }

  erase() {
    this.setState(this.baseState);
    // window.location.reload();
  }
  
  render() {
    
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1>Entrance Exam</h1>
            
                  
            <div>
                Test 1: 
                <input value={this.state.title} onChange={(e) => {
                  
                  this.setState({
                    title: e.target.value 
                  });
                  console.log(this.state.test1);
                } 
                } />
            </div>

            <div>
                test2: 
                  <input value={this.state.servings} onChange={(e) => {
                    this.setState({
                    
                      test2: e.target.value
                      
                    });
                  
                  }} />
            </div>
            <div>
                boolean: 
                  <select value={this.state.veg} onChange={(e) => {
                    this.setState({
                      veg: e.target.value
                      
                    });
                  }}>
                    <option value="false">Absolutely Not</option>
                    <option value="true">Yes!</option>
                  </select>
            </div>
            <div>
                boolean2: 
                  <select value={this.state.vegan} onChange={(e) => {
                    this.setState({
                      
                      boolean2: e.target.value
                      
                    });
                  }}>
                    <option value="false">Absolutely Not</option>
                    <option value="true">Yes!</option>
                  </select>
            </div>
            <div>
                  boolean3: 
                    <select value={this.state.gf} onChange={(e) => {
                      this.setState({
                        
                        boolean3: e.target.value
                        
                      });
                    }}>
                      <option value="false">Absolutely Not</option>
                      <option value="true">Yes!</option>
                    </select>
            </div>
            {/* <div>
                  Meal Types:
                  <MealTypes value={this.state.mTypes} setMealTypes={this.setMealTypes} /> */}

            {/* <select label="mealTypes" name="mealTypes[]" id="mealTypes" multiple 
                    onClick={(e) => {
                      console.log(e.target.value);
                      const types = document.getElementById("mealTypes").selectedOptions;
                      const arr = [];
                      for (let i = 0; i < types.length; i++) {
                        arr.push(types[i].text);
                      }
                      console.log(types);  
                      this.setState({
                    
                        mTypes: arr
                      
                      });
                      console.log(this.state.mTypes);
                  
                    }}>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                    <option value="snack">Snack</option>
                  </select>  */}
          </div>
          <div>
              Typing Test
              <textarea value={this.state.typeingTest} 
                onChange={e => {
                  const typeingTest = e.target.value;
                  this.setState({
                  
                    typeingTest
                    
                  });

                }} />
                essay
              <textarea value={this.state.essay}
                onChange={(e) => {
                  const essay = e.target.value;
                  this.setState({  
                      
                    essay
                    
                  });
                }} />
            <button onClick={this.erase} value="Clear Test" />
            <input type="submit" value="Submit Test" />
          

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


