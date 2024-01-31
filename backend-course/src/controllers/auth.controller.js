import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import {createAccessToken} from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import {TokenSecret} from '../config.js'


export const register = async (req, res) => {
    const { name_estudent, email, password, username } = req.body;

    try {
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            name_estudent,
            username,
            email,
            password: passwordHash,
            role: "Estudiante"
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({id : userSaved._id})

        res.cookie('token', token);

        res.json({
            id: userSaved._id,
            name_estudent : userSaved.name_estudent,
            username: userSaved.username,
            email: userSaved.email,
            role : userSaved.role
        }) 
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({email});

        if(!userFound) return res.status(400).json({message : "User not found "});

        const passwordMatch = await bcrypt.compare(password, userFound.password);

        if(!passwordMatch) return res.status(400).json({message : "Incorrect password"});

        const token = await createAccessToken({id : userFound._id})

        

        res.cookie('token', token);

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            role : userFound.role
        }) 
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

export const logout = (req, res) => {
    res.cookie('token', "", {
       expires : new Date(0) 
    });
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if(!userFound) return res.status(400).json({message : "User not found"});

    return res.json({
        id : userFound._id,
        name_estudent : userFound.name_estudent,
        username : userFound.username,
        email : userFound.email,
        role : userFound.role
    });
    
}

export const verifyToken = async (req, res) => {
    const {token} = req.cookies;

    if(!token) return res.status(401).json({message : "token Unauthorized"})

    jwt.verify(token, TokenSecret, async (err, user) =>{
        if(err) return res.status(401).json({message : "Token Unauthorized"});

      const userFound = await User.findById(user.id)
      if(!userFound) return res.status(401).json({message : "Token Unauthorized"})

      return res.json({
        id : userFound._id,
        username : userFound.username,
        email : userFound.email,
        role : userFound.role
      })
    })
}