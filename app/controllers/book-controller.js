import ModelBook from '../models/book-schema.js'

//get book all data
const getBooks = async(req, res) => {
    try {
        const books = await ModelBook.find()
        res.json(books)
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//get a single book
const getBookById = async(req, res) => {
    try {
        const book = await ModelBook.findById(req.params.id)
        res.json(book)
    } catch(error) {
        res.status(404).json({
            message: error.message
        })
    }
}

//add a new book
const saveBook = async(req, res) => {
    const book = new ModelBook(req.body)
    try {
        const savedBook = await book.save()
        res.status(201).json(savedBook)
    } catch(error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export {getBooks, getBookById, saveBook}