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
  result.save()
    .then(() => {
      console.log("I saved new results");
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

// }
