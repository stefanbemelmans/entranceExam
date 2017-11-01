import resultModel from "../models/resultModel";

// export function list(request, response) {
//   resultModel.find({}).exec().then(
//     result => {
//       return response.json(result);
//     }
//   );
// }

// export function show(request, response) {
//   resultModel.findById(request.params.id).exec().then(
//     result => {
//       return response.json(result);
//     });
// }
// .body is the whole thing. (thanks Jon!)
export function create(request, response) {
  const result = new resultModel({
    title: request.body.title,
    veg: request.body.veg,
    vegan: request.body.vegan,
    gf: request.body.gf,
    servings: request.body.servings,
    mTypes: request.body.mTypes,
    ingredients: request.body.ingredients,
    instructions: request.body.instructions
  });
  result.save()
    .then(() => {
      console.log(response);
      return response.json(result);
 
    });
 
  
}
// export function update(request, response, next) {
//   console.log(request.body);
//   // const recipeUpdate = request.body;
//   resultModel.findById(request.params.id).exec()
//   .then(result => {
   
//     result.title = request.body.title || result.title;
//     result.veg = request.body.veg || result.veg;
//     result.vegan = request.body.vegan || result.vegan;
//     result.gf = request.body.gf || result.gf;
//     result.servings = request.body.servings || result.servings;
//     result.mTypes = request.body.mTypes || result.mTypes;
//     result.ingredients = request.body.ingredients || result.ingredients;
//     result.instructions = request.body.instructions || result.instructions;

//     return result.save();
//   })
//   .then(changedresult => {
//     return response.json(changedresult);
//   })
//   .catch(err => {
//     return next(err);
//   });
   
// }
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



// export function remove(request, response) {
//   recipeModel.findByIdAndRemove({_id: request.params.id}).exec()
//   .then(() => {
    
//     return response.send("recipe deleted");

//   }); 

}
