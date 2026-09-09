import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export interface AuthRequest extends Request {
    user?: {
        id: string;
        perfil: string;
    };
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token não fornecido." });
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2) {
        return res.status(401).json({ error: "Token com formato inválido." });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ error: "Token mal formatado." });
    }

    try {
        const decoded = verifyToken(token) as any;
        
        req.user = {
            id: decoded.id,
            perfil: decoded.perfil
        };

        return next();
    } catch (err) {
        return res.status(401).json({ error: "Token inválido ou expirado." });
    }
};