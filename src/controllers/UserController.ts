import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { AuthRequest } from "../middlewares/authMiddleware";

export class UserController {
    async create(req: Request, res: Response) {
        const { nome, email, senha, perfil } = req.body;
        const userService = new UserService();

        try {
            const newUser = await userService.create({ nome, email, senha, perfil });
            return res.status(201).json(newUser);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async getMe(req: AuthRequest, res: Response) {
        return res.status(200).json(req.user);
    }

    async adminPing(req: AuthRequest, res: Response) {
        return res.status(200).json({ message: "Pong! Você tem acesso de Administrador." });
    }
}