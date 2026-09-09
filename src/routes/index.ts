import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { AuthController } from "../controllers/AuthController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware"; 

const routes = Router();
const userController = new UserController();
const authController = new AuthController();

routes.post("/auth/register", userController.create);
routes.post("/auth/login", authController.login);

routes.get("/users/me", authMiddleware, userController.getMe); 

routes.get(
    "/admin/ping", 
    authMiddleware, 
    roleMiddleware(["Administrador"]), 
    userController.adminPing
);

export { routes };