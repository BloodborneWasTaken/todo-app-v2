import { Router } from "express";
import {
    login,
    register,

} from "./controller.js";


const category = Router();

category.get("/", register);
category.post("/", login);


export default category;