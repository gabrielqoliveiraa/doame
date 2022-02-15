/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import { GetRequestByUserIDService } from '../../services/Pedidos/GetRequestByUserIDService'

export class GetRequestByUserIDController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params

    const service = new GetRequestByUserIDService()

    const pedidos = await service.execute(id)

    return response.json(pedidos)
  }
}
