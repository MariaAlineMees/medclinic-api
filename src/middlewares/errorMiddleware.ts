import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const errorMiddleware = (
    error: Error | AppError, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ error: error.message });
    }

    if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
    }

    return res.status(500).json({
        status: "error",
        message: "Erro interno do servidor."
    });
};