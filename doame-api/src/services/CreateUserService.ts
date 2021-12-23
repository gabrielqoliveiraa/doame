import { getRepository } from "typeorm"
import { User } from "../entities/User"

type UserRequest = {
    nome: string;
    email: string;
    senha: string;
}

export class CreateUserService{

    async execute({nome, email, senha}: UserRequest): Promise<User | Error>{
        const repo = getRepository(User)

        if(await repo.findOne({email})){
            return new Error("Email já cadastrado existe")
        }

        const user = repo.create({
            nome,
            email,
            senha
        })

        await repo.save(user)

        return user
    }
}