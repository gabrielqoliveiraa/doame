import { NextFunction, Request, Response } from "express";
import { DeletePedidoService } from "services/Pedidos/DeletePedidoService";

export class DeletePedidoController{
    async handle(request: Request, response: Response, next: NextFunction){
        const { id } = request.params

        const service = new DeletePedidoService()

        try{
            const pedidoDeleted = await service.execute(id)
            return response.json(pedidoDeleted)
        } catch(err){
            next(err)
        }
    }
}