import { PedidosRepositories } from '../../repositories/PedidosRespositoriesService'
import { UserRepositories } from '../../repositories/UserRepositoriesService'
import { Requests } from '../../entities/Request'
import { AppError } from '../../errors/AppErrors'

type PedidoRequest = {
  description: string
  bloodType: string
  bagQuantity: number
  contact: string
  userId: string
  alreadyDonated: number
}

export class CreatePedidoService {
  private pedidosRepositories: PedidosRepositories

  private userRepositories: UserRepositories

  constructor() {
    this.pedidosRepositories = new PedidosRepositories()
    this.userRepositories = new UserRepositories()
  }

  async execute({
    userId,
    description,
    bloodType,
    bagQuantity,
    contact,
    alreadyDonated,
  }: PedidoRequest): Promise<Requests | Error> {
    const user = await this.userRepositories.findUserByID(userId)

    if (!user) {
      throw new AppError('Usuário não existe', 409)
    }

    const pedidoCriado = this.pedidosRepositories.createPedido({
      userId,
      description,
      bloodType,
      bagQuantity,
      contact,
      alreadyDonated,
    })

    if (!pedidoCriado) {
      throw new AppError('Pedido não criado', 500)
    }

    return pedidoCriado
  }
}
