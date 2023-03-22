import Joi from 'joi'

export const createRoomValidation = (name: string) => {
  const createRoomSchema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'O campo nome é obrigatório!',
      'string.base': 'O campo nome não pode ser um número.'
    })
  })

  return createRoomSchema.validate({ name })
}
