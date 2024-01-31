import { io } from "../app.js";
import Message from "../models/message.model.js";

export function MessagesSocket() {
    io.on('connection', socket => {
        console.log(socket.id)


        socket.on('message', async ({ content, user }) => {
            const message = new Message({ content: content });
            await message.save();
            console.log(content);
            socket.broadcast.emit('message', {
                body : content,
                from : user.username
            })
        }) 
    });
}