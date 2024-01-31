import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuth } from '../context/AuthContext';

const socket = io("http://localhost:3000");

interface chatProps{
    closeChat() : void
}

export default function Chat({closeChat} : chatProps) {
    interface IMessage {
        body: string;
        from: string | undefined;
    }

    const { user } = useAuth();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<IMessage[]>([
        {
            body : "",
            from : "",
        },
            
    ]);
    useEffect(() => {
        const receivedMessage = (message: IMessage) => {
            setMessages([...messages, message]);
        };

        socket.on('message', receivedMessage);

        return () => {
            socket.off('message', receivedMessage);
        };
    }, [messages]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newMessage = {
            body: message,
            from: "Me"
        };

        // Enviar mensaje y datos del usuario al servidor
        socket.emit('message', { content: message, user: { username: user?.username} });
        setMessages([...messages, newMessage]);
        setMessage('');
    };

    return (

        <section className='bg-white h-96 absolute p-4 w-2/5 rounded-md border-b-4 border-green-blue overflow-y-auto'>
            <h1 onClick={closeChat} className='font-bold flex justify-end m-0.5'>X</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index} 
                    className={`my-2 p-2 table text-sm rounded-md ${
                        message.from === "Me" ? "bg-sky-700 ml-auto font-medium mx-2" : "bg-black text-white" 
                    }`} 
                        >
                        <p className='p-1'>{message.from} :  {message.body}</p>
                    </li>
                ))}
                </ul>
                <form onSubmit={handleSubmit} className='flex justify-end mt-10'>
                    <section className='flex gap-20 '>
                        <input className='border-b-4 bg-zinc-300 w-72 font-bold' type="text" onChange={handleChange} value={message} />
                        <button className='rounded-md p-2 w-20 h-auto bg-cornflower-blue'>Send</button>
                    </section>
                </form>
            



        </section>
    );
}






