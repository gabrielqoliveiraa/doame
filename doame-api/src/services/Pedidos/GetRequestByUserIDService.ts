/* eslint-disable @typescript-eslint/no-unused-vars */
import { PedidosRepositories } from '../../repositories/PedidosRespositoriesService'

export class GetRequestByUserIDService {
  private pedidosRepositories: PedidosRepositories

  constructor() {
    this.pedidosRepositories = new PedidosRepositories()
  }

  async execute(id: string) {
    const pedidos = await this.pedidosRepositories.findAllRequestByUserID(id)
    return pedidos
  }
}
