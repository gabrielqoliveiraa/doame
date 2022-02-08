import { NextFunction, Request, Response } from 'express'

import { CreatePedidoService } from '../../services/Pedidos/CreatePedidoService'

export class CreatePedidoController{
    async handle(request: Request, response: Response, next: NextFunction ){
        const {descricao, tipo_sangue, quantidade_bolsas, contato, user_id} = request.body

        const service = new CreatePedidoService()
        
        try{
            const result = await service.execute({descricao, tipo_sangue, quantidade_bolsas, contato, user_id})
            return response.json(result)
        } catch(err){
            next(err)
        }
    }
}