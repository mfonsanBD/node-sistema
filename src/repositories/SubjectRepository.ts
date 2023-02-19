import { AppDataSource } from '../data-source'
import { Subject } from '../entities/Subject'

export const SubjectRespository = AppDataSource.getRepository(Subject)
