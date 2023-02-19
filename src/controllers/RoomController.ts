import { type Request, type Response } from 'express'
import { BadRequestError, NotFoundError } from '../helpers/api-errors'
import { RoomRespository } from '../repositories/RoomRepository'
import { SubjectRespository } from '../repositories/SubjectRepository'
import { VideoRespository } from '../repositories/VideoRepository'

export class RoomController {
  async create (req: Request, res: Response) {
    const { name } = req.body

    if (name === '') {
      throw new BadRequestError('O nome da aula é obrigatório')
    }

    const newRoom = RoomRespository.create({ name })
    await RoomRespository.save(newRoom)
    return res.status(201).json(newRoom)
  }

  async createVideo (req: Request, res: Response) {
    const { title, url } = req.body
    const { idRoom } = req.params

    if (title === '') {
      throw new BadRequestError('O título do vídeo é obrigatório!')
    }

    const room = await RoomRespository.findOneBy({ id: Number(idRoom) })

    if (room == null) {
      throw new NotFoundError('Aula não encontrada nos registros!')
    }

    const newVideo = VideoRespository.create({ title, url, room })
    await VideoRespository.save(newVideo)
    return res.status(201).json(newVideo)
  }

  async roomSubject (req: Request, res: Response) {
    const { subjectId } = req.body
    const { idRoom } = req.params

    const room = await RoomRespository.findOneBy({ id: Number(idRoom) })

    if (room == null) {
      throw new NotFoundError('Aula não encontrada nos registros!')
    }

    const subject = await SubjectRespository.findOneBy({ id: Number(subjectId) })

    if (subject == null) {
      throw new NotFoundError('Disciplina não encontrada nos registros!')
    }

    const roomUpdate = {
      ...room,
      subjects: [subject]
    }

    await RoomRespository.save(roomUpdate)

    return res.status(200).json(room)
  }

  async list (req: Request, res: Response) {
    const rooms = await RoomRespository.find({
      relations: {
        subjects: true,
        videos: true
      }
    })

    return res.json(rooms)
  }
}
