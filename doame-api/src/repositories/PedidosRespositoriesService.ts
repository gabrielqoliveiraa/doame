import { Requests } from 'entities/Pedido'
import { getRepository, Repository } from 'typeorm'


export class PedidosRepositories{
    private repositories: Repository<Requests>

    constructor(){
        this.repositories = getRepository(Requests)
    }

    async findPedidoByID(id: string) : Promise<Requests>{
        const pedido = this.repositories.findOne({id})
        return pedido
    }

    async findAllPedidos() : Promise<Requests[]> {
        return await this.repositories.find({relations: ['user']})
    }

    async createPedido({userId, description, bloodType, bagQuantity, contact}) : Promise<Requests>{
        const pedido = this.repositories.create({userId, description, bloodType, bagQuantity, contact})
        return this.repositories.save(pedido)
    }

    async updatePedido({id, description, bloodType, bagQuantity, contact}) : Promise<Requests>{
        const pedido = await this.repositories.update({id}, {description, bloodType, bagQuantity, contact})
        return this.repositories.findOne(id)
    }

    async deletePedidoByID(id: string): Promise<Requests>{
        const pedido = await this.repositories.findOne({id})
        await this.repositories.delete(pedido)
        return pedido
    }
}