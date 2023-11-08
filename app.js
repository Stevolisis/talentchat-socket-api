const express=require('express');
const http=require('http');
const app=express();
const server=http.createServer(app);
const io=require('socket.io')(server,{
    cors:{
        origin:'http://localhost:5173',
        method:['GET','POST']
    }
});

server.listen(80,()=>{console.log('Server running at PORT 80')})

io.on("connection",(socket)=>{
    socket.emit("me",socket.id);
});
