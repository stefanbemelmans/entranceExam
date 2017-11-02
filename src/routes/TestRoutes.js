import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/testController";


router.get("/entrance", list);
router.get("/entrance/:id", show);
router.post("/entrance", create);
router.put("/entrance/:id", update);
router.delete("/entrance/:id", remove);

export default router;

