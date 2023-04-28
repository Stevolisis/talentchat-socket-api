import React,{  useEffect, useState, useRef } from 'react';
import { Peer } from "peerjs";
import { io } from 'socket.io-client';
import './index.css';
import queryString from 'query-string';

const socket=io.connect(import.meta.env.VITE_SOCKET_HOST);

export default function App() {
  const [id, setId]=useState(123);
  const [me,setMe]=useState(1234);
  const params = queryString.parse(location.search);

  useEffect(()=>{
    socket.on('me',(id)=>{
      setId(id);
    });
    socket.emit('join-room',params.roomId,12)
  },[]);


  return (
    <>
      <div><p>Talent Video</p></div>
      <div><h1>Video Chat App</h1></div>
    </>
  )
}



