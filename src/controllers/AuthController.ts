import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
    async login(req: Request, res: Response) {
        const { email, senha } = req.body;
        const authService = new AuthService();

        try {
            const authData = await authService.login(email, senha);
            return res.status(200).json(authData);
        } catch (error: any) {
            return res.status(401).json({ error: error.message });
        }
    }
}