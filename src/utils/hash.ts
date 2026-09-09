import bcrypt from "bcrypt";

export const hashPassword = async (senha: string): Promise<string> => {
    const saltRounds = 10;
    return await bcrypt.hash(senha, saltRounds);
};

export const comparePassword = async (senha: string, hash: string): Promise<boolean> => {
    return await bcrypt.compare(senha, hash);
};