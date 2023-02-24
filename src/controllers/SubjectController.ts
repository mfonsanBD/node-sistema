import { Request, Response } from 'express'
import { BadRequestError } from '../helpers/api-errors'
import { SubjectRespository } from '../repositories/SubjectRepository'

export class SubjectController {
  async create (req: Request, res: Response) {
    const { name } = req.body

    if (name === '') {
      throw new BadRequestError('O nome da disciplina é obrigatório')
    }

    const newSubject = SubjectRespository.create({ name })

    await SubjectRespository.save(newSubject)

    return res.status(201).json(newSubject)
  }
}
