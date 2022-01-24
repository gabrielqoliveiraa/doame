/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express'

import { CreateUserService } from '../../services/Users/CreateUserService'

export class CreateUserController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { name, email, password } = request.body
    const service = new CreateUserService()
    try {
      const result = await service.execute({ name, email, password })
      return response.json(result)
    } catch (err) {
      next(err)
    }
  }
}
