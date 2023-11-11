const express=require('express');
const http=require('http');
const { formatMessage } = require('./Utils/messages');
const { userJoin, getCurrentUser } = require('./Utils/users');
const app=express();
const server=http.createServer(app);
const io=require('socket.io')(server,{
    cors:{
        origin:'https://talent-video-chat.vercel.app',
        method:['GET','POST']
    }
});

server.listen(80,()=>{console.log('Server running at PORT 80')});

const botName = 'TalentChat Bot';
io.on("connection",(socket)=>{
    socket.emit("me",socket.id);
    socket.on('join-room',(args)=>{
        const user = userJoin(socket.id,args.name,args.room);
        socket.join(user.room);
        socket.emit('message',formatMessage(socket.id,botName,'Welcome to TalentChat'));
        socket.broadcast.to(user.room).emit('message', formatMessage(socket.id,botName, `${user.userName} has joined the chat`));
    });
});


app.get('/', (req, res) => {
    res.send('Hello, this is your Node.js app!');
});
