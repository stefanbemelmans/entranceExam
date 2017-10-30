import mongoose from "mongoose";

const schema = new mongoose.Schema({
  
  title: {
    required: true,
    type: String
  },
  veg: {
    required: true,
    type: Boolean
  },
  vegan: {
    required: true,
    type: Boolean
  },
  gf: {
    requried: true,
    type: Boolean
  },
  servings: {
    required: true,
    type: String
  },
  mTypes: {
    required: true,
    type: Array
  },
  ingredients: 
  {
    required: true,
    type: String
    
  },
  instructions: {
    requried: true,
    type: String
  }  


});

export default mongoose.model("Recipe", schema);
