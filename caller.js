const express=require('express');
const http=require('http');
const app=express();
const server=http.createServer(app);
const io=require('socket.io')(server,{
    cors:{
        origin:'http://127.0.0.1:5173',
        method:['GET','POST']
    }
});

server.listen(5000,()=>{console.log('Server running at PORT 5000')});



io.on("connection",(socket)=>{
    socket.on("join-room",(roomId,userId)=>{
        socket.join(roomId);
        socket.to(roomId).emit('user-connected',userId);
    });
});



app.get('/',(req,res)=>{
    res.send('Hello People!!!');
});