import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";


export enum UserRole {
    ADMIN = "Administrador",
    ATTENDANT = "Atendente"
}

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "varchar", length: 100 })
    nome!: string;

    @Column({ type: "varchar", length: 100, unique: true })
    email!: string;

    @Column({ type: "varchar" })
    senha!: string;

    @Column({ type: "enum", enum: UserRole, default: UserRole.ATTENDANT })
    perfil!: UserRole;

    @CreateDateColumn({ name: "criado_em" })
    dataCriacao!: Date;
}