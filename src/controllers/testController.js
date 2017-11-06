import testModel from "../models/testModel";

export function list(request, response) {
  testModel.find({}).exec().then(
    tests => {
      return response.json(tests);
    }
  );
}

export function show(request, response) {
  testModel.findById(request.params.id).exec().then(
    recipe => {
      return response.json(recipe);
    });
}
// .body is the whole thing. (thanks Jon!)
export function create(request, response) {
  const test = new testModel({
    fName: request.body.fName,
    lName: request.body.lName,
    phone: request.body.phone,
    test1: request.body.test1,
    test2: request.body.test2,
    test3: request.body.test3,
    test4: request.body.test4,
    // mTypes: request.body.mTypes,
    typingTest: request.body.typingTest,
    text1: request.body.text1
  });
  test.save()
    .then(() => {
      console.log(response);
      return response.json(test);
 
    });
 
  
}
export function update(request, response, next) {
  console.log(request.body);
  // const recipeUpdate = request.body;
  testModel.findById(request.params.id).exec()
  .then(recipe => {
   
    recipe.title = request.body.title || recipe.title;
    recipe.veg = request.body.veg || recipe.veg;
    recipe.vegan = request.body.vegan || recipe.vegan;
    recipe.gf = request.body.gf || recipe.gf;
    recipe.servings = request.body.servings || recipe.servings;
    recipe.mTypes = request.body.mTypes || recipe.mTypes;
    recipe.ingredients = request.body.ingredients || recipe.ingredients;
    recipe.instructions = request.body.instructions || recipe.instructions;

    return recipe.save();
  })
  .then(changedRecipe => {
    return response.json(changedRecipe);
  })
  .catch(err => {
    return next(err);
  });
   
}
// update: (request, response, next) => {
//   User.findByIdAndUpdate(request.params.id).exec()
//   .then(user => {
//   user.firstName = request.body.firstName || user.firstName;
//   user.lastName = request.body.lastName || user.lastName;
//   user.passWord = request.body.passWord || user.passWord;
//   user.asthma = request.body.asthma || user.asthma;
//   user.userName = request.body.userName || user.userName;
  
//   return user.save();
//   })
//   .then(changedUser => {
//   return response.json(changedUser);
//   })
//   .catch(err => {
//   return next(err);
//   });
//   } 



export function remove(request, response) {
  recipeModel.findByIdAndRemove({_id: request.params.id}).exec()
  .then(() => {
    
    return response.send("recipe deleted");

  }); 

}
