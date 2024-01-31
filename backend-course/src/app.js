import express from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import {Server as SocketServer} from 'socket.io'
import authRoutes from "./routes/auth.routes.js";

const app = express();

export const server = http.createServer(app)

export const io = new SocketServer(server, {
    cors : {
        origin : "http://localhost:5173"
    }
    
})


app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}));

//I use this to validate path
app.use(morgan('dev'));
app.use(express.json());


//I use this to read header cookies
app.use(cookieParser())

app.use('/api',authRoutes)


export default app