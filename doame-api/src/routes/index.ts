import { Router } from 'express'

import userRoutes from './user.routes'
import pedidosRoutes from './pedido.routes'

const router = Router()

router.use('/user', userRoutes)
router.use('/pedidos', pedidosRoutes)

export default router
