import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import {Server as SocketServer} from 'socket.io'

import authRoutes from "./routes/auth.routes.js";

const app = express();
const server = http.createServer(app);
export const io = new SocketServer(server)

//I use this to validate path
app.use(morgan('dev'));
app.use(express.json());


//I use this to read header cookies
app.use(cookieParser())

app.use('/api',authRoutes)


export default app