import express from 'express'
const route = express.Router()
import {getBooks, getBookById, saveBook} from '../controllers/book-controller.js'


route.get('/', getBooks)
route.get('/:id', getBookById)
route.post('/', saveBook)

export default route