/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepositories } from '../../repositories/UserRepositoriesService'

import { User } from '../../entities/User'
import { AppError } from '../../errors/AppErrors'

type UserRequest = {
  email: string
  password: string
}

export class LoginUserService {
  private userRepositories: UserRepositories

  constructor() {
    this.userRepositories = new UserRepositories()
  }

  async execute({ email, password }: UserRequest): Promise<boolean | Error> {
    const user = await this.userRepositories.findUserByEmail(email)

    if (!user) {
      throw new AppError('User is not exists', 404)
    }

    if (user.password !== password)
      throw new AppError('Password is not match!', 406)

    return true
  }
}
