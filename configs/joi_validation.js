import Joi from 'joi'

const validateRegister = (data) => {
    const Schema = Joi.object({
        name : Joi.string().min(3).max(40).required(),
        email : Joi.string().email(),
        password : Joi.string()

    })
    return Schema.validate(data)
}

export default validateRegister