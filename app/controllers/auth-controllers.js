import ModelAuth from '../models/auth-schema.js'
import registerValidate from '../configs/joi_validation.js'
import bcrypt from 'bcrypt'

//get user data
const getUsers = async (req, res) => {
    //validate account logged-in
        //code here
    try {
        const findUsers = await ModelAuth.find()
        res.json(findUsers)
    } catch (error) {
        res.json({
            message : error
        })
    }
} 

//register new user
const postUsers = async (req, res) => {

    //validasi input
    const {error} = registerValidate(req.body)
    if(error) return res.status(400).json({
        status : res.statusCode,
        message : error.details[0].message
    })

    const isExist = await ModelAuth.findOne({email : req.body.email})
    //email isExist
    if(isExist && isExist.active) return res.status(400).json({
        status : res.statusCode,
        message : "Email registered!"
    })

    //not verified user
    if(isExist && !isExist.active) return res.status(400).json({
        status : res.statusCode,
        message : "Account with this email is not verified."
    })

    //password hash
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(req.body.password, salt)

    const data = new ModelAuth({
        name : req.body.name,
        email : req.body.email,
        password : passwordHash,
        active : false,
        role : "user"
    })

    try {
        const saveUser = await data.save()
        res.json(saveUser)
    } catch (error) {
        res.json({
            message : error
        })
    }
}

//delete a user
const deleteUser = async (req, res) => {
    try {
        const deleteUser = await ModelAuth.deleteOne({_id:req.params.id})
        res.json(deleteUser)
    } catch (error) {
        res.json({
            message : error
        })
    }
}

export {getUsers, postUsers, deleteUser}