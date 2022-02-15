/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextFunction, Request, Response } from 'express'
import { UpdatePedidoService } from '../../services/Pedidos/UpdatePedidoService'

export class UpdatePedidoController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params
    const { description, bloodType, bagQuantity, contact, alreadyDonated } =
      request.body
    const service = new UpdatePedidoService()
    try {
      const result = await service.execute({
        id,
        description,
        bloodType,
        bagQuantity,
        contact,
        alreadyDonated,
      })
      return response.json(result)
    } catch (err) {
      next(err)
    }
  }
}
