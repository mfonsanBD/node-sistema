import { AppDataSource } from '../data-source'
import { Video } from '../entities/Video'

export const VideoRespository = AppDataSource.getRepository(Video)
