import { CreatePedidoController } from 'controllers/Pedido/CreatePedidoController'
import { DeletePedidoController } from 'controllers/Pedido/DeletePedidoController'
import { GetAllPedidosController } from 'controllers/Pedido/GetAllPedidosController'
import { UpdatePedidoController } from 'controllers/Pedido/UpdatePedidoController'
import { Router } from 'express'

const pedidosRoutes = Router()

pedidosRoutes.post('/', new CreatePedidoController().handle)
pedidosRoutes.get('/', new GetAllPedidosController().handle)
pedidosRoutes.put('/:id', new UpdatePedidoController().handle)
pedidosRoutes.delete('/:id', new DeletePedidoController().handle)

export default pedidosRoutes