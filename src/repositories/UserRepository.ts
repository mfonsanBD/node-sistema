import { AppDataSource } from '../data-source'
import { User } from '../entities/User'

export const UserRespository = AppDataSource.getRepository(User)
