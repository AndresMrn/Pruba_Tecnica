import axios from "./credentials.ts";
import {User} from '../models/user.ts'

export const registerRequest = (user : User) => axios.post('/register', user);

export const loginRequest = (user : User) => axios.post('/login', user);

export const logout = (user : User) => axios.post('/logout', user);

export const verifyToken = (token : string) => axios.get('/verify');