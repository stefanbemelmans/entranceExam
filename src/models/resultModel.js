import mongoose from "mongoose";

const schema = new mongoose.Schema({
  
  name: {
    required: true,
    type: String
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

export default mongoose.model("result", schema);
