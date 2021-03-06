import { Router } from 'express'

import { CreateUserController } from '../controllers/User/CreateUserController'
import { LoginUserController } from '../controllers/User/LoginUserController'
import { DeleteUserController } from '../controllers/User/DeleteUserController'
import { GetAllUsersController } from '../controllers/User/GetAllUsersController'

const userRoutes = Router()

userRoutes.post('/', new CreateUserController().handle)
userRoutes.post('/login', new LoginUserController().handle)
userRoutes.get('/', new GetAllUsersController().handle)
userRoutes.delete('/:id', new DeleteUserController().handle)

export default userRoutes
