import React,{  useEffect, useRef, useState } from 'react';
import { Peer } from "peerjs";
import { io } from 'socket.io-client';
import './index.css';
import queryString from 'query-string';

const socket=io.connect(import.meta.env.VITE_SOCKET_HOST);

export default function App() {
  // const [id, setId]=useState(123);
  const [me,setMe]=useState(1234);
  const [myStream,setMyStream]=useState('');
  const [recieverStream,setRecieverStream]=useState('');
  const myVideo=useRef();
  const recieverVideo=useRef();
  const params = queryString.parse(location.search);
  const peer = new Peer();
  console.log('peer',peer)

  useEffect(()=>{
    navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then((stream)=>{
      myVideo.current.srcObject=stream;
      myVideo.current.play();

      
    socket.on('user-connected',(userId)=>{
      const call=peer.call(userId,stream);
      console.log('User connected',userId)

    });

    });

    peer.on('open',(id)=>{
      socket.emit('join-room',params.roomId,params.userId);
    });

  },[]);




  return (
    <>
      <section className='p-4'>
        <div><p className='text-center font-bold  text-blue-600 text-xl'>Talent Video Chat App</p></div>
        <div>
          <h1 className='font-semibold text-blue-500'>My Screen</h1>
          <video className='w-40 h-40 rounded' ref={myVideo}/>
          <div>
            <input type='text' placeholder='userToCall' className='bg-gray-100 border border-blue-600 p-3'/>
            <button className='py-3 px-8  border-blue-600 border-l-0 border text-blue-800 bg-slate-300'>Call</button>
          </div>
        </div>

        <div>
          <h1 className='font-semibold text-blue-500 mt-12'>Reciever's Screen</h1>
          <video className='w-40 h-40 rounded' ref={recieverVideo}/>
        </div>
      </section>
    </>
  )
}



