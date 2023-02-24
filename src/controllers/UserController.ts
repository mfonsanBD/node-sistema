import { Request, Response } from 'express'
import { BadRequestError } from '../helpers/api-errors'
import { UserRespository } from '../repositories/UserRepository'
import bcrypt from 'bcrypt'

export class UserController {
  async create (req: Request, res: Response) {
    const { name, email, password } = req.body

    const emailExists = await UserRespository.findOneBy({ email })

    if (emailExists) {
      throw new BadRequestError('Esse e-mail já existe no sistema!')
    }

    if (!name) {
      throw new BadRequestError('O campo de nome é obrigatório!')
    }
    if (!email) {
      throw new BadRequestError('O campo de e-mail é obrigatório!')
    }
    if (!password) {
      throw new BadRequestError('O campo de senha é obrigatório!')
    }

    const hasPass = await bcrypt.hash(password, 10)

    const newUser = UserRespository.create({
      name,
      email,
      password: hasPass
    })

    await UserRespository.save(newUser)

    const { password: _, ...user } = newUser

    return res.status(201).json(user)
  }
}
