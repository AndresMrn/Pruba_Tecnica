import app from './app.js';
import { connectDB} from './db.js';


const port = process.env.Port ?? 3000;

connectDB();
app.listen(port)
console.log('server port', port)
