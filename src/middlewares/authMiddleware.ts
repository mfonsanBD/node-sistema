import { NextFunction, Request, Response } from 'express'
import { UnauthorizedError } from '../helpers/api-errors'
import jwt from 'jsonwebtoken'
import { UserRespository } from '../repositories/UserRepository'

interface JWLPayloadProps {
  id: number
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization) {
    throw new UnauthorizedError('Você não tem autorização para visualizar essas informações!')
  }

  const token = authorization.split(' ')[1]

  const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JWLPayloadProps

  const user = await UserRespository.findOneBy({ id })

  if (!user) {
    throw new UnauthorizedError('Usuário não autorizado!')
  }

  const { password: _, ...loggedUser } = user

  req.user = loggedUser

  next()
}
