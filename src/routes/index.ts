import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { AuthController } from "../controllers/AuthController"; 
const routes = Router();
const userController = new UserController();
const authController = new AuthController(); 

routes.post("/auth/register", userController.create);
routes.post("/auth/login", authController.login); 

export { routes };