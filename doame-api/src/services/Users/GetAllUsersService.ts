import { UserRepositories } from '../../repositories/UserRepositoriesService'

export class GetAllUserService {
  private userRepositories: UserRepositories

  constructor() {
    this.userRepositories = new UserRepositories()
  }

  async execute() {
    const users = await this.userRepositories.findAllUsers()
    return users
  }
}
