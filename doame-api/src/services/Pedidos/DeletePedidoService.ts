import { AppError } from "errors/AppErrors";
import { PedidosRepositories } from "repositories/PedidosRespositoriesService";

export class DeletePedidoService{
    private pedidosRepositories: PedidosRepositories

    constructor(){
        this.pedidosRepositories = new PedidosRepositories()
    }

    async execute(id: string): Promise<any>{
        const pedido = await this.pedidosRepositories.findPedidoByID(id)

        if(!pedido){
            throw new AppError("Usuário não existe")
        }

        return await this.pedidosRepositories.deletePedidoByID(pedido.id)
    }
}