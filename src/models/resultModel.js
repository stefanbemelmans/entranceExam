import mongoose from "mongoose";

const schema = new mongoose.Schema({
  
  fName: {
    required: true,
    type: String
  },
  lName: {
    required: true,
    type: String
  },
  phone: {
    required: true,
    type: Number,
    validate: {
      validator(v) {
        return /d{10}/.test(v);
      },
      message: "{VALUE} is not a valid 10 digit number!"
    }
  },
  test1: {
    required: true,
    type: Boolean
  },
  test2: {
    required: true,
    type: Boolean
  },
  test3: {
    requried: true,
    type: Boolean
  },
  test4: {
    required: true,
    type: String
  },
  test5: {
    required: true,
    type: Array
  },
  typingTest: 
  {
    required: true,
    type: Object
    
  },
  text1: {
    requried: true,
    type: String
  }  


});

export default mongoose.model("resultModel", schema);
