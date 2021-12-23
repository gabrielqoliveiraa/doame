import { CreateUserController } from "controllers/CreateUserController"
import { GetAllUsersController } from "controllers/GetAllUsersController"
import { DeleteUserController } from "controllers/DeleteUserController"
import { Router } from "express"
import { UpdateUserController } from "controllers/UpdateUserController"

const routes = Router()

routes.post("/users", new CreateUserController().handle)
routes.get("/users", new GetAllUsersController().handle)
routes.delete("/users/:id", new DeleteUserController().handle)
routes.put("/users/:id", new UpdateUserController().handle)

export { routes }
