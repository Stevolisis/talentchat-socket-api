import React,{  useEffect, useRef, useState } from 'react';
import { Peer } from "peerjs";
import { io } from 'socket.io-client';
import './index.css';
import queryString from 'query-string';

const socket=io.connect(import.meta.env.VITE_SOCKET_HOST);

export default function App() {
  const [recieverId, setRecieverId]=useState(123);
  const [me,setMe]=useState('');
  const [myStream,setMyStream]=useState('');
  // const [recieverStream,setRecieverStream]=useState('');
  const myVideo=useRef();
  const recieverVideo=useRef();
  const params = queryString.parse(location.search);
  const peer = new Peer();


  useEffect(()=>{
    navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then((stream)=>{
      myVideo.current.srcObject=stream;
      myVideo.current.play();
      setMyStream(stream);

      
    socket.on('user-connected',(userId)=>{
      
      const call=peer.call(userId,stream);

      call.on('stream',(recieverStream)=>{
        recieverVideo.current.srcObject=recieverStream;
      });
      
      call.on('close',()=>{ 
        recieverVideo.current=null;
      });

    });

      peer.on('call',(call)=>{
        call.answer(stream);
        call.on('stream',(myStream)=>{
          myVideo.current.srcObject=myStream;
          myVideo.current.play();
        });
      })
    });

    peer.on('open',id=>{
      console.log('me',id);
      setMe(id)
      socket.emit('join-room',params.roomId,id);
    });

  },[]);

  const callUser=()=>{
    const call=peer.call(recieverId,myStream);

    call.on('stream',(recieverStream)=>{
      recieverVideo.current.srcObject=recieverStream;
      recieverVideo.current.play();
    });

    
    peer.on('call',(call)=>{
      call.answer(myStream);
      call.on('stream',(myStream)=>{
        myVideo.current.srcObject=myStream;
        myVideo.current.play();
      });
    });
  }




  return (
    <>
      <section className='p-4'>
        <div><p className='text-center font-bold  text-blue-600 text-xl'>Talent Video Chat App</p></div>
        <div>
          <h1 className='font-semibold text-blue-500'>My Screen: {me}</h1>
          <video className='w-40 h-40 rounded' ref={myVideo}/>
          <div>
            <input onChange={(e)=>setRecieverId(e.target.value)} type='text' placeholder='userToCall' className='bg-gray-100 outline-none border border-blue-600 p-3'/>
            <button onClick={()=>callUser()} className='py-3 px-8  border-blue-600 border-l-0 border text-blue-800 bg-slate-300'>Call</button>
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



