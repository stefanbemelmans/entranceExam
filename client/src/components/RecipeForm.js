import React, {Component} from "react";
import PropTypes from "prop-types";
import MealTypes from "./MealTypes";
import {withRouter} from "react-router-dom";

export default class RecipeForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = 
    {
    
      title: "",
      servings: "",
      veg: false,
      vegan: false,
      gf: false,
      mTypes: [],
      ingredients: "",
      instructions: ""
    };

    this.baseState = this.state;
    
    this.setMealTypes = this.setMealTypes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentDidMount() {
    this.setState(this.props.recipe);
  }

  handleSubmit(e) {
    e.preventDefault();
    const recipe = this.state;
    this.props.submitRecipe(recipe);
   
    // this.props.history.push("/");
  }
  
  
  setMealTypes(arrayOfOptions) {
    const arr = [];
    console.log(arrayOfOptions);
    for (let i = 0; i < arrayOfOptions.length; i++) {
      arr.push(arrayOfOptions[i].text);
    }
    this.setState({
      mTypes: arr
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
            <h1>Create Recipe</h1>
            
                  
            <div>
                Recipe Title: 
                <input value={this.state.title} onChange={(e) => {
                  
                  this.setState({
                    title: e.target.value 
                  });
                  console.log(this.state.title);
                } 
                } />
            </div>

            <div>
                Number of Servings: 
                  <input value={this.state.servings} onChange={(e) => {
                    this.setState({
                    
                      servings: e.target.value
                      
                    });
                  
                  }} />
            </div>
            <div>
                Vegitarian: 
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
                Vegan: 
                  <select value={this.state.vegan} onChange={(e) => {
                    this.setState({
                      
                      vegan: e.target.value
                      
                    });
                  }}>
                    <option value="false">Absolutely Not</option>
                    <option value="true">Yes!</option>
                  </select>
            </div>
            <div>
                  Gluten Free: 
                    <select value={this.state.gf} onChange={(e) => {
                      this.setState({
                        
                        gf: e.target.value
                        
                      });
                    }}>
                      <option value="false">Absolutely Not</option>
                      <option value="true">Yes!</option>
                    </select>
            </div>
            <div>
                  Meal Types:
                  <MealTypes value={this.state.mTypes} setMealTypes={this.setMealTypes} />

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
              Ingredients 
              <textarea value={this.state.ingredients} 
                onChange={e => {
                  const ingredients = e.target.value;
                  this.setState({
                  
                    ingredients
                    
                  });

                }} />
                Instructions
              <textarea value={this.state.instructions}
                onChange={(e) => {
                  const instructions = e.target.value;
                  this.setState({  
                      
                    instructions
                    
                  });
                }} />
              <button onClick={this.erase} value="Clear Recipe" />
              <input type="submit" value="Submit Recipe" />
          

            </div>
        
          
      

          </div>
          {/* <AddIngredients ingredients={this.state.ingredients} /> */}
        </form>

      </div>
  
    )
  ;
  }
}

RecipeForm.propTypes = {
  handleSubmit: PropTypes.func,  
  submitRecipe: PropTypes.func,
  history: PropTypes.object,
  recipe: PropTypes.object
  

};


