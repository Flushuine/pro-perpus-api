import Mongoose from "mongoose";

const BookSchema = new Mongoose.Schema({
    isbn: {
        type: String,
        required: true,
        maxlength: 20
    },
    book_author: {
        type: String,
        required: true
    },
    book_name: {
        type: String,
        required: true
    },
    book_category: {
        type: Array,
        required: true
    },
    book_synopsis: {
        type: String,
        required: true
    },
    book_release_date: {
        type: String,
        required: true
    },
    book_stock: {
        type: Number,
        required: true
    },
    book_cover: {
        type: String,
        required: false
    },
    book_rating: {
        type: Number,
        required: true
    },
    book_publisher: {
        type: String,
        required: true
    }
});

export default Mongoose.model('book', BookSchema);