/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from 'express'

import { LoginUserService } from '../../services/Users/LoginUserService'

export class LoginUserController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { email, password } = request.body
    const service = new LoginUserService()
    try {
      const result = await service.execute({ email, password })
      return response.json(result)
    } catch (err) {
      next(err)
    }
  }
}
