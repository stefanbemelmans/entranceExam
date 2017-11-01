import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

// import recipeRoutes from "./routes/RecipeRoutes";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://stack:stack@ds241895.mlab.com:41895/entrance");
const app = express();
app.use(bodyParser.json());
// app.use(recipeRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
