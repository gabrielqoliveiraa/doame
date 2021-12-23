import { User } from "entities/User"
import { getRepository } from "typeorm"

export class DeleteUserService{
    async execute(id: string){
        const repo = getRepository(User)

        if(!await repo.findOne(id)){
            return new Error("Usário não existe")
        }

        await repo.delete(id)
    }
}