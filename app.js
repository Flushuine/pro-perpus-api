import Express from 'express'
const app = Express()
import dotenv from 'dotenv'
dotenv.config()
import AuthRoutes from './routes/auth-routes.js'
import Mongoose from 'mongoose'

//middleware - untuk menangkap teks dari req.body
app.use(Express.json())


//routes
app.use('/api/auth/', AuthRoutes)

//connect database
const connect = async () => {
    try {
        const connected = await Mongoose.connect(process.env.DB_CONNECT)
        if(connected) console.log('connected to db')
    } catch (error) {
        console.log(error)
    }
}

connect()

//running local server
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})