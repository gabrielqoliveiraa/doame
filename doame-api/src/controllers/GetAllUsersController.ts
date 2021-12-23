import { Request, Response } from "express"
import { User } from "entities/User"
import { GetAllUserService } from "services/GetAllUsersService"

export class GetAllUsersController{
    async handle(request: Request, response: Response){
        const service = new GetAllUserService();

        const users = await service.execute();

        return response.json(users)
    }
}