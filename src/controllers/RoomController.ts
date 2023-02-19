import { type Request, type Response } from "express";
import { RoomRespository } from "../repositories/RoomRepository";
import { SubjectRespository } from "../repositories/SubjectRepository";
import { VideoRespository } from "../repositories/VideoRepository";

export class RoomController {
  async create(req: Request, res: Response){
    const { name } = req.body

    if(name === ''){
      return res.status(400).json({ message: 'O nome da disciplina é obrigatório' })
    }

    try {
      const newRoom = RoomRespository.create({ name })
      await RoomRespository.save(newRoom)
      return res.status(201).json(newRoom)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  async createVideo(req: Request, res: Response){
    const { title, url } = req.body
    const {idRoom} = req.params

    if(title === ''){
      return res.status(400).json({ message: 'O título da aula é obrigatório!' })
    }

    try {
      const room = await RoomRespository.findOneBy({id: Number(idRoom)})

      if(room == null){
        return res.status(404).json({ message: 'Aula não encontrada nos registros!' })
      }

      const newVideo = VideoRespository.create({ title, url, room })
      await VideoRespository.save(newVideo)
      return res.status(201).json(newVideo)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  async roomSubject(req: Request, res: Response){
    const { subjectId } = req.body
    const { idRoom } = req.params

    try {
      const room = await RoomRespository.findOneBy({id: Number(idRoom)})

      if(room == null){
        return res.status(404).json({ message: 'Aula não encontrada nos registros!' })
      }

      const subject = await SubjectRespository.findOneBy({ id: Number(subjectId) })

      if(subject == null){
        return res.status(404).json({ message: 'Disciplina não encontrada nos registros!' })
      }

      const roomUpdate = {
        ...room,
        subjects: [subject]
      }

      await RoomRespository.save(roomUpdate)

      return res.status(200).json(room)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }

  async list(req: Request, res: Response){
    try {
      const rooms = await RoomRespository.find({
        relations: {
          subjects: true,
          videos: true
        }
      })

      return res.json(rooms)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}
