import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (
    error: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
    }

    return res.status(500).json({
        status: "error",
        message: "Erro interno do servidor."
    });
};