import React, {Component} from "react";

export default class AddIngredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingNum: 0,
      ingAmt: "",
      ingName: "",
      // ing: {
      //   name: "",
      //   amt: ""
    };

  }
  

  addIng() {
    const newIng = {};
    Object.assign(newIng, {name: this.state.ingName, amt: this.state.ingAmt} );
    console.log(this.state);
    this.props.ingredients.push(newIng);
    console.log(this.props.ingredients);

    this.setState({
      ingNum: this.state.ingNum + 1,
      ingAmt: "",
      ingName: ""     
    });
    
  }

  remIng() {
    this.props.ingredients.pop();
    // this.setState({
    //   ings: this.state.ings.pop()
    // });
  }



  render() {
    let newIngs;
    if (this.props.ingredients) {
      newIngs = this.props.ingredients.map((x,i) => {
        return ( 
          <div key={i}>
            <li>{x.amt}</li>
            <li>{x.name}</li>
          </div>);
      });
    } else {
      newIngs = "";
    }
   
  // let currentIngs = this.state.ings.map((x,i) => {
  //  <li key={i}>{x.amt} of {x.name}</li>
  // });

    return (
      <div>
        <form id="addIngs">
          <input defaultValue="Amount" onChange={(e) => {
            this.setState({
              ingAmt: e.target.value
            });
          }} />
          {/* <label>Ingredient Amount</label> */}

          <input label="ingName" defaultValue="Ingredient Name" onChange={(e) => {
            this.setState({
              recipe: {
                name: e.target.value
              } 
            });
          }} />
          {/* <label></label> */}
          <div>
            <button onClick={this.addIng}>Add Ingredient</button>
            <button onClick={this.remIng}>Remove Ingredient</button>
          </div>
        </form>
      
        <ul>{newIngs}</ul>
      </div>    
    );
      
             

  }
}
