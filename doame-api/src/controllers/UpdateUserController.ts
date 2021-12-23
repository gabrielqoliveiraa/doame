import { Request, Response } from "express"
import { UpdateUserService } from "services/UpdateUserService"

export class UpdateUserController{
    async handle(request: Request, response: Response){
        const { id } = request.params
        const { nome, email, senha} = request.body

        const service = new UpdateUserService()

        const result = service.execute({id, nome, email, senha})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}