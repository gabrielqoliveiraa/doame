import { UserRepositories } from '../../repositories/UserRepositoriesService'

import { User } from '../../entities/User'
import { AppError } from '../../errors/AppErrors'

type UserRequest = {
  name: string
  email: string
  password: string
}

export class CreateUserService {
  private userRepositories: UserRepositories

  constructor() {
    this.userRepositories = new UserRepositories()
  }

  async execute({ name, email, password }: UserRequest): Promise<User | Error> {
    const user = await this.userRepositories.findUserByEmail(email)

    if (user) {
      throw new AppError('User already exists', 409)
    }

    const userCreated = this.userRepositories.createUser({
      name,
      email,
      password,
    })

    if (!userCreated) {
      throw new AppError('User not created', 500)
    }

    return userCreated
  }
}
