import { userRepository } from "../repositories/UserRepository";
import { comparePassword } from "../utils/hash"; 
import { generateToken } from "../utils/jwt"; 

export class AuthService {
    async login(email: string, senha: string) {
        if (!email || !senha) {
            throw new Error("E-mail e senha são obrigatórios.");
        }

        const user = await userRepository.findOneBy({ email });
        if (!user) {
            throw new Error("Credenciais inválidas.");
        }

        const passwordMatch = await comparePassword(senha, user.senha); 
        if (!passwordMatch) {
            throw new Error("Credenciais inválidas.");
        }

        const token = generateToken({ id: user.id, perfil: user.perfil }); 

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