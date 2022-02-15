import { AppError } from '../../errors/AppErrors'
import { PedidosRepositories } from '../../repositories/PedidosRespositoriesService'

type PedidoUpdateRequest = {
  id: string
  description: string
  bloodType: string
  bagQuantity: number
  contact: string
  alreadyDonated: number
}

export class UpdatePedidoService {
  private pedidosRepositories: PedidosRepositories

  constructor() {
    this.pedidosRepositories = new PedidosRepositories()
  }

  async execute({
    id,
    description,
    bloodType,
    bagQuantity,
    contact,
    alreadyDonated,
  }: PedidoUpdateRequest) {
    const pedido = await this.pedidosRepositories.findPedidoByID(id)

    if (!pedido) {
      throw new AppError('Pedido não existe')
    }
    console.log(alreadyDonated)
    const pedidoUpdated = this.pedidosRepositories.updatePedido({
      id,
      description,
      bloodType,
      bagQuantity,
      contact,
      alreadyDonated,
    })

    if (!pedidoUpdated) {
      throw new AppError('Pedido não atualizado')
    }

    return pedidoUpdated
  }
}
