import { Router } from 'express'
import { AuthController } from './controllers/AuthController'
import { RoomController } from './controllers/RoomController'
import { SubjectController } from './controllers/SubjectController'
import { UserController } from './controllers/UserController'
import { authMiddleware } from './middlewares/authMiddleware'

const routes = Router()

routes.post('/login', new AuthController().login)

routes.post('/user', new UserController().create)

routes.use(authMiddleware)
routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)
routes.get('/room', new RoomController().list)

export default routes
