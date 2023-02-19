import { type Request, type Response } from 'express'
import { SubjectRespository } from '../repositories/SubjectRepository'

export class SubjectController {
  async create (req: Request, res: Response) {
    const { name } = req.body

    if (name === '') {
      return res.status(400).json({ message: 'O nome da disciplina é obrigadtório' })
    }

    try {
      const newSubject = SubjectRespository.create({ name })

      await SubjectRespository.save(newSubject)

      return res.status(201).json(newSubject)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}
