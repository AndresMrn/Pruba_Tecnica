import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const { email, password, username } = req.body

    try {

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password : passwordHash,
            role : false
        })

        const userSaved = await newUser.save();
        res.json({
            id : userSaved._id,
            username : userSaved.username,
            email : userSaved.email
        })
    } catch (error) {
        console.log(error)
    }

}

export const login = (req, res) => {
    res.send('Me estoy logueando');
}