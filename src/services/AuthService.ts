import { userRepository } from "../repositories/UserRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
    async login(email: string, senha: string) {
        if (!email || !senha) {
            throw new Error("E-mail e senha são obrigatórios.");
        }

        const user = await userRepository.findOneBy({ email });
        
        if (!user) {
            throw new Error("Credenciais inválidas.");
        }

        const passwordMatch = await bcrypt.compare(senha, user.senha);
        if (!passwordMatch) {
            throw new Error("Credenciais inválidas.");
        }

        const token = jwt.sign(
            { id: user.id, perfil: user.perfil },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" }
        );

        return {
            user: {
                id: user.id,
                nome: user.nome,
                email: user.email,
                perfil: user.perfil
            },
            token
        };
    }
}