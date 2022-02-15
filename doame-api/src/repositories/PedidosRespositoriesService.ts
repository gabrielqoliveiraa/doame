/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getRepository, Repository } from 'typeorm'
import { Requests } from '../entities/Request'

export class PedidosRepositories {
  private repositories: Repository<Requests>

  constructor() {
    this.repositories = getRepository(Requests)
  }

  async findPedidoByID(id: string): Promise<Requests> {
    const pedido = this.repositories.findOne({ id })
    return pedido
  }

  async findAllRequestByUserID(userId: string): Promise<Requests[]> {
    const requests = this.repositories.find({
      relations: ['user'],
      where: {
        user: {
          id: userId,
        },
      },
    })
    return requests
  }

  async findAllPedidos(): Promise<Requests[]> {
    const requests = await this.repositories.find({ relations: ['user'] })
    return requests
  }

  async createPedido({
    userId,
    description,
    bloodType,
    bagQuantity,
    contact,
    alreadyDonated,
  }): Promise<Requests> {
    const pedido = this.repositories.create({
      userId,
      description,
      bloodType,
      bagQuantity,
      contact,
      alreadyDonated,
    })
    return this.repositories.save(pedido)
  }

  async updatePedido({
    id,
    description,
    bloodType,
    bagQuantity,
    contact,
    alreadyDonated,
  }): Promise<Requests> {
    await this.repositories.update(
      { id },
      { description, bloodType, bagQuantity, contact, alreadyDonated }
    )
    const request = this.repositories.findOne(id)
    return request
  }

  async deletePedidoByID(id: string): Promise<Requests> {
    const pedido = await this.repositories.findOne({ id })
    await this.repositories.delete(pedido)
    return pedido
  }
}
