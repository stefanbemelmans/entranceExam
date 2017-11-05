import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/testController";


router.get("/tests", list);
router.get("/tests/:id", show);
router.post("/", create);
router.put("/tests/:id", update);
router.delete("/tests/:id", remove);

export default router;

