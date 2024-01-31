import { server } from './app.js';
import { connectDB} from './db.js';
import { MessagesSocket } from './controllers/messages.controller.js';


const port = 3000;

connectDB();
MessagesSocket(); 
server.listen(port)
console.log('server port', port)
