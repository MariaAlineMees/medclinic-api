import { Request, Response } from "express";
import { UserService } from "../services/UserService";

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
}