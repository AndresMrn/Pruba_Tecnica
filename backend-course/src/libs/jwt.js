import jwt from 'jsonwebtoken';
import { TokenSecret } from "../config.js";


export function createAccessToken(payload) {
    return new Promise((resolve, reject) =>{
        jwt.sign(
            payload,
            TokenSecret,
            {
             expiresIn: "1d"
            },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
        
            }
        );

    })
}


