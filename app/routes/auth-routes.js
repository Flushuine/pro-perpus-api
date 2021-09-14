import express from 'express'
const route = express.Router()
import {getUsers, postUsers, deleteUser, confirmEmail} from '../controllers/auth-controllers.js'


route.get('/', getUsers)
route.post('/', postUsers)
route.delete('/:id', deleteUser)
route.get('/confirmation/:token', confirmEmail)

export default route