import { PedidosRepositories } from "repositories/PedidosRespositoriesService";

export class GetAllPedidosService{
    private pedidosRepositories: PedidosRepositories

    constructor(){
        this.pedidosRepositories = new PedidosRepositories()
    }

    async execute(){
        const pedidos = await this.pedidosRepositories.findAllPedidos()
        return pedidos
    }
}