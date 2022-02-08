import { AppError } from "errors/AppErrors";
import { PedidosRepositories } from "repositories/PedidosRespositoriesService";

type PedidoUpdateRequest = {
    id: string,
    descricao: string,
    tipo_sangue: string,
    quantidade_bolsas: number,
    contato: string
}

export class UpdatePedidoService{
    private pedidosRepositories: PedidosRepositories

    constructor(){
        this.pedidosRepositories = new PedidosRepositories()
    }
    
    async execute({id, descricao, tipo_sangue, quantidade_bolsas, contato}: PedidoUpdateRequest){
        const pedido = await this.pedidosRepositories.findPedidoByID(id)

        if(!pedido){
            throw new AppError("Pedido não existe")
        }

        const pedidoUpdated = this.pedidosRepositories.updatePedido({id, descricao, tipo_sangue, quantidade_bolsas,
        contato})
        
        if(!pedidoUpdated){
            throw new AppError("Pedido não atualizado")
        }

        return pedidoUpdated
    }
}