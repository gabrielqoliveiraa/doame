/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express'

import { DeleteUserService } from '../../services/Users/DeleteUserService'

export class DeleteUserController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params

    const service = new DeleteUserService()

    try {
      const userDeleted = await service.execute(id)
      return response.json(userDeleted)
    } catch (e) {
      next(e)
    }
  }
}
