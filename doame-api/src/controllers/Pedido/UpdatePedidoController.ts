import { NextFunction, Request, Response } from "express";
import { UpdatePedidoService } from "services/Pedidos/UpdatePedidoService";

export class UpdatePedidoController{
    async handle(request: Request, response: Response, next: NextFunction){
        const { id } = request.params
        const { description, bloodType, bagQuantity, contact } = request.body

        const service = new UpdatePedidoService()

        try{
            const result = await service.execute({id, description, bloodType, bagQuantity, contact})
            return response.json(result)
        } catch(err){
            next(err)
        }
    }
}