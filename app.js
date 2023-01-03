import doetnv from 'dotenv'
import { Server } from './models/server.js';

doetnv.config();

const server = new Server();

server.listen();