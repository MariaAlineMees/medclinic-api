import { Response, NextFunction } from "express";
import { AuthRequest } from "./authMiddleware";

export const roleMiddleware = (rolesPermitidas: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        const userPerfil = req.user?.perfil;

        if (!userPerfil || !rolesPermitidas.includes(userPerfil)) {
            return res.status(403).json({ error: "Acesso negado. Permissão insuficiente." });
        }

        return next();
    };
};