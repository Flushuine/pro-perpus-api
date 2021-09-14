import express from 'express'
const route = express.Router()
import {getUsers, postUsers, deleteUser} from '../controllers/auth-controllers.js'


route.get('/', getUsers)
route.post('/', postUsers)
route.delete('/:id', deleteUser)

export default route