import { Pedido } from 'entities/Pedido'
import { getRepository, Repository } from 'typeorm'


export class PedidosRepositories{
    private repositories: Repository<Pedido>

    constructor(){
        this.repositories = getRepository(Pedido)
    }

    async findPedidoByID(id: string) : Promise<Pedido>{
        const pedido = this.repositories.findOne({id})
        return pedido
    }

    async findAllPedidos() : Promise<Pedido[]> {
        return await this.repositories.find({relations: ['user']})
    }

    async createPedido({user_id, descricao, tipo_sangue, quantidade_bolsas, contato}) : Promise<Pedido>{
        const pedido = this.repositories.create({user_id, descricao, tipo_sangue, quantidade_bolsas, contato})
        return this.repositories.save(pedido)
    }

    async updatePedido({id, descricao, tipo_sangue, quantidade_bolsas, contato}) : Promise<Pedido>{
        const pedido = await this.repositories.update({id}, {descricao, tipo_sangue, quantidade_bolsas, contato})
        return this.repositories.findOne(id)
    }

    async deletePedidoByID(id: string): Promise<Pedido>{
        const pedido = await this.repositories.findOne({id})
        await this.repositories.delete(pedido)
        return pedido
    }
}