import { Request, Response } from 'express'
import { BadRequestError, NotFoundError } from '../helpers/api-errors'
import { UserRespository } from '../repositories/UserRepository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class AuthController {
  async login (req: Request, res: Response) {
    const { email, password } = req.body

    const user = await UserRespository.findOneBy({ email })

    if (!user) {
      throw new NotFoundError('E-mail não encontrado!')
    }

    const verifyPass = await bcrypt.compare(password, user.password)

    if (!verifyPass) {
      throw new BadRequestError('Senha inválidos!')
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', { expiresIn: 60 * 60 * 24 * 7 })

    const { password: _, id: __, ...userLogin } = user

    return res.json({ user: userLogin, token })
  }
}
