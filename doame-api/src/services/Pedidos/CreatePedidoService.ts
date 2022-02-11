import { PedidosRepositories } from "repositories/PedidosRespositoriesService";
import { UserRepositories } from "repositories/UserRepositoriesService";
import { Requests } from '../../entities/Pedido'
import { AppError } from '../../errors/AppErrors'

type PedidoRequest = {
    description: string,
    bloodType: string,
    bagQuantity: number,
    contact: string,
    userId: string
}
Request
 export class CreatePedidoService{
    private pedidosRepositories: PedidosRepositories
    private userRepositories: UserRepositories

     constructor(){
         this.pedidosRepositories = new PedidosRepositories()
         this.userRepositories = new UserRepositories()
     }

     async execute({userId, description, bloodType, bagQuantity, contact}: PedidoRequest) : Promise<Requests | Error>{
        const user = await this.userRepositories.findUserByID(userId)

        if(!user){
            throw new AppError("Usuário não existe", 409)
        }

        const pedidoCriado = this.pedidosRepositories.createPedido({userId, description, bloodType, bagQuantity, contact})

        if(!pedidoCriado){
            throw new AppError("Pedido não criado", 500)
        }

        return pedidoCriado
     }
 }