/* eslint-disable no-return-await */
import { UserRepositories } from '../../repositories/UserRepositoriesService'

import { AppError } from '../../errors/AppErrors'

export class DeleteUserService {
  private userRepositories: UserRepositories

  constructor() {
    this.userRepositories = new UserRepositories()
  }

  async execute(id: string): Promise<any> {
    const user = await this.userRepositories.findUserByID(id)
    if (!user) {
      throw new AppError('Usário não existe')
    }

    return await this.userRepositories.deleteUserBYID(user.id)
  }
}
