import { Router } from 'express'
import { CreatePedidoController } from '../controllers/Pedido/CreatePedidoController'
import { DeletePedidoController } from '../controllers/Pedido/DeletePedidoController'
import { UpdatePedidoController } from '../controllers/Pedido/UpdatePedidoController'
import { GetAllPedidosController } from '../controllers/Pedido/GetAllPedidosController'
import { GetRequestByUserIDController } from '../controllers/Pedido/GetRequestByUserIDController'

const pedidosRoutes = Router()

pedidosRoutes.post('/', new CreatePedidoController().handle)
pedidosRoutes.get('/', new GetAllPedidosController().handle)
pedidosRoutes.get('/:id', new GetRequestByUserIDController().handle)
pedidosRoutes.put('/:id', new UpdatePedidoController().handle)
pedidosRoutes.delete('/:id', new DeletePedidoController().handle)

export default pedidosRoutes
