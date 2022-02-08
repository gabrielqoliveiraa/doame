import { PedidosRepositories } from "repositories/PedidosRespositoriesService";
import { UserRepositories } from "repositories/UserRepositoriesService";
import { Pedido } from '../../entities/Pedido'
import { AppError } from '../../errors/AppErrors'

type PedidoRequest = {
    descricao: string,
    tipo_sangue: string,
    quantidade_bolsas: number,
    contato: string,
    user_id: string
}

 export class CreatePedidoService{
    private pedidosRepositories: PedidosRepositories
    private userRepositories: UserRepositories

     constructor(){
         this.pedidosRepositories = new PedidosRepositories()
         this.userRepositories = new UserRepositories()
     }

     async execute({user_id, descricao, tipo_sangue, quantidade_bolsas, contato}: PedidoRequest) : Promise<Pedido | Error>{
        const user = await this.userRepositories.findUserByID(user_id)

        if(!user){
            throw new AppError("Usuário não existe", 409)
        }

        const pedidoCriado = this.pedidosRepositories.createPedido({user_id, descricao, tipo_sangue, quantidade_bolsas, contato})

        if(!pedidoCriado){
            throw new AppError("Pedido não criado", 500)
        }

        return pedidoCriado
     }
 }