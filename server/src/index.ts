import express, {Router} from 'express';
import { AppController } from './controllers';
import { ApplicationRouter } from './routes';
import {Server} from 'socket.io';
import http from 'http'
import cors from 'cors'

const port = 3001;
const app = express();
const AppRouter = Router();
app.use(cors());
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket) => { 
  socket.on("join_room", (id) => {
    console.log('join room data', id)
    socket.join(id);
  });

  socket.on("send_message", (data) => {
    console.log('send message data', data)
    socket.to(data).emit("receive_message", {
      message: data,
    });
  });

  socket.on('disconnect', function() {
    console.log('one user disconnected ' + socket.id);
  });

});

app.use(express.json());
app.use(express.urlencoded());

app.use('/api', AppRouter);

ApplicationRouter(AppRouter);


server.listen(port, () => {
  console.log(`Server running at ${port}`)
})
