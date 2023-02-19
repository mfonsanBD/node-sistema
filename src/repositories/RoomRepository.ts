import { AppDataSource } from '../data-source'
import { Room } from '../entities/Room'

export const RoomRespository = AppDataSource.getRepository(Room)
