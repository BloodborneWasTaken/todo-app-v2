import { Router } from "express";
import authController from "./controller.js";
import {Authorzation} from "../../middleware/auth.js"


const category = Router();

category.post("/register", authController.register);
category.post("/login", Authorzation,authController.login);


export default category;