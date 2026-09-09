import { userRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import bcrypt from "bcrypt";

export class UserService {
    async create({ nome, email, senha, perfil }: Partial<User>) {
        if (!nome || !email || !senha) {
            throw new Error("Nome, e-mail e senha são obrigatórios."); // Vai ser tratado pelo nosso futuro Error Middleware
        }

        const userExists = await userRepository.findOneBy({ email });
        
        if (userExists) {
            throw new Error("E-mail já cadastrado.");
        }

        const hashPassword = await bcrypt.hash(senha, 10);

        const newUser = userRepository.create({
            nome,
            email,
            senha: hashPassword,
            perfil
        });

        await userRepository.save(newUser);

        const { senha: _, ...userWithoutPassword } = newUser;
        
        return userWithoutPassword;
    }
}