import { NextFunction, Request, Response } from "express";
import { UpdatePedidoService } from "services/Pedidos/UpdatePedidoService";

export class UpdatePedidoController{
    async handle(request: Request, response: Response, next: NextFunction){
        const { id } = request.params
        const { descricao, tipo_sangue, quantidade_bolsas, contato } = request.body

        const service = new UpdatePedidoService()

        try{
            const result = await service.execute({id, descricao, tipo_sangue, quantidade_bolsas, contato})
            return response.json(result)
        } catch(err){
            next(err)
        }
    }
}