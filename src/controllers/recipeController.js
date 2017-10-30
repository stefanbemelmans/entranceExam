import recipeModel from "../models/recipeModel";

export function list(request, response) {
  recipeModel.find({}).exec().then(
    recipes => {
      return response.json(recipes);
    }
  );
}

export function show(request, response) {
  recipeModel.findById(request.params.id).exec().then(
    recipe => {
      return response.json(recipe);
    });
}
// .body is the whole thing. (thanks Jon!)
export function create(request, response) {
  const recipe = new recipeModel({
    title: request.body.title,
    veg: request.body.veg,
    vegan: request.body.vegan,
    gf: request.body.gf,
    servings: request.body.servings,
    mTypes: request.body.mTypes,
    ingredients: request.body.ingredients,
    instructions: request.body.instructions
  });
  recipe.save()
    .then(() => {
      console.log(response);
      return response.json(recipe);
 
    });
 
  
}
export function update(request, response, next) {
  console.log(request.body);
  // const recipeUpdate = request.body;
  recipeModel.findById(request.params.id).exec()
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
