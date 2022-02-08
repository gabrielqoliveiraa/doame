import { NextFunction, Request, Response } from "express";
import { GetAllPedidosService } from "services/Pedidos/GetAllPedidosService";

export class GetAllPedidosController{
    async handle(request: Request, response: Response, next: NextFunction){
        const service = new GetAllPedidosService()

        const pedidos = await service.execute()

        return response.json(pedidos)
    }
}