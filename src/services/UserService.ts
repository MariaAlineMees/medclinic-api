import { userRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";
import { hashPassword } from "../utils/hash";

export class UserService {
    async create({ nome, email, senha, perfil }: Partial<User>) {
        if (!nome || !email || !senha) {
            throw new Error("Nome, e-mail e senha são obrigatórios.");
        }

        const userExists = await userRepository.findOneBy({ email });
        if (userExists) {
            throw new Error("E-mail já cadastrado.");
        }

        const hashedPassword = await hashPassword(senha);

        const newUser = userRepository.create({
            nome,
            email,
            senha: hashedPassword,
            perfil
        });

        await userRepository.save(newUser);

        const { senha: _, ...userWithoutPassword } = newUser;
        
        return userWithoutPassword;
    }
}