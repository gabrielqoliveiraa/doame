/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express'

import { CreatePedidoService } from '../../services/Pedidos/CreatePedidoService'

export class CreatePedidoController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const {
      description,
      bloodType,
      bagQuantity,
      contact,
      userId,
      alreadyDonated,
    } = request.body

    const service = new CreatePedidoService()

    try {
      const result = await service.execute({
        description,
        bloodType,
        bagQuantity,
        contact,
        userId,
        alreadyDonated,
      })
      return response.json(result)
    } catch (err) {
      next(err)
    }
  }
}
