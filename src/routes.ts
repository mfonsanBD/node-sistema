import { Router } from 'express'
import { AuthController } from './controllers/AuthController'
import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'

const routes = Router()

routes.post('/login', new AuthController().login)

routes.post('/user', new UserController().create)

routes.use(authMiddleware)

export default routes
