import jwt from "jsonwebtoken";

interface TokenPayload {
    id: string;
    perfil: string;
}

const secret = process.env.JWT_SECRET as string;

export const generateToken = (payload: TokenPayload): string => {
    return jwt.sign(payload, secret, { expiresIn: "1d" });
};

export const verifyToken = (token: string): any => {
    return jwt.verify(token, secret);
};