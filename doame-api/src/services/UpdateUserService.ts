import { User } from "entities/User"
import { response } from "express"
import { getRepository } from "typeorm"

type UserUpdateRequest = {
    id: string;
    nome: string;
    email: string;
    senha: string;
}

export class UpdateUserService{
    async execute({ id, nome, email, senha}: UserUpdateRequest){
        const repo = getRepository(User)

        const user = await repo.findOne(id)

        if(!user){
            return new Error("Esse usuário não existe")
        }

        user.nome = nome ? nome : user.nome
        user.email = email ? email : user.email
        user.senha = senha ? senha : user.senha

        await repo.save(user)

        return user
    }
}