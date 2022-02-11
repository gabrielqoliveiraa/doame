import { AppError } from "errors/AppErrors";
import { PedidosRepositories } from "repositories/PedidosRespositoriesService";

type PedidoUpdateRequest = {
    id: string,
    description: string,
    bloodType: string,
    bagQuantity: number,
    contact: string
}

export class UpdatePedidoService{
    private pedidosRepositories: PedidosRepositories

    constructor(){
        this.pedidosRepositories = new PedidosRepositories()
    }
    
    async execute({id, description, bloodType, bagQuantity, contact}: PedidoUpdateRequest){
        const pedido = await this.pedidosRepositories.findPedidoByID(id)

        if(!pedido){
            throw new AppError("Pedido não existe")
        }

        const pedidoUpdated = this.pedidosRepositories.updatePedido({id, description, bloodType, bagQuantity,
        contact})
        
        if(!pedidoUpdated){
            throw new AppError("Pedido não atualizado")
        }

        return pedidoUpdated
    }
}