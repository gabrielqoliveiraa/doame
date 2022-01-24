/* eslint-disable no-return-await */
import { getRepository, Repository } from 'typeorm'

import { User } from '../entities/User'

export class UserRepositories {
  private repositories: Repository<User>

  constructor() {
    this.repositories = getRepository(User)
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.repositories.findOne({ email })
    return user
  }

  async createUser({ name, email, password }): Promise<User> {
    const user = this.repositories.create({ name, email, password })
    return this.repositories.save(user)
  }

  async findAllUsers(): Promise<User[]> {
    return await this.repositories.find()
  }

  async findUserByID(id: string): Promise<User> {
    const user = await this.repositories.findOne({ id })
    return user
  }

  async deleteUserBYID(id: string): Promise<User> {
    const user = await this.repositories.findOne({ id })
    await this.repositories.delete(user)
    return user
  }
}
