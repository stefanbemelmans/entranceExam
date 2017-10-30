import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/recipeController";


router.get("/recipes", list);
router.get("/recipes/:id", show);
router.post("/recipes", create);
router.put("/recipes/:id", update);
router.delete("/recipes/:id", remove);

export default router;

