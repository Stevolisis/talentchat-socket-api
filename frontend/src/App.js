import React,{  useEffect, useState, useRef } from 'react';
import Peer from 'simple-peer';
import {io} from 'socket.io-client';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './index.css';
import Header from './components/Header';
import Participants from './components/Participants';
import Chats from './components/Chats';
import Footer from './components/Footer';
import ParticipantStream from './components/ParticipantStream';
import Controls from './components/Controls';
import JoinRoom from './components/JoinRoom';

const socket=io.connect(process.env.REACT_APP_SOCKET_HOST);

function App() {
  const [me,setMe]=useState('');
  const [stream,setStream]=useState('');
  const [recievingCall,setRecievingCall]=useState(false);
  const [calling,setCalling]=useState(false);
  const [caller,setCaller]=useState('');
  const [callerSignal,setCallerSignal]=useState('');
  const [callAccepted,setCallAccepted]=useState(false);
  const [idToCall,setIdToCall]=useState('');
  const [callEnded,setCallEnded]=useState(false);
  const [name,setName]=useState('');
  const [usersStatus,setUsersStatus]=useState(false);
  const [chatStatus,setChatStatus]=useState(false);
  const myVideo=useRef({srcObject:''});
  const userVideo=useRef({srcObject:''});
  const connectionRef=useRef();

  useEffect(()=>{
    navigator.mediaDevices.getUserMedia({video:true, audio:true})
    .then((stream)=>{
      console.log('begnnnstrreeeaam',stream);
      setStream(stream);
      myVideo.current.srcObject=stream;
    }).catch(err=>{
      console.log('errrorrr',err);
    });

    socket.on('me',(id)=>{
      console.log('iiiddd',id);
      setMe(id);
    })

    socket.on('callUser',(data)=>{
      setRecievingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal)
    })
  },[]);
  console.log(me)




  const callUser=(id)=>{
    console.log('callUsercallUser',id);
    setCalling(true)
    const peer=new Peer({
      initiator:true,
      trickle:false,
      stream: stream
    });

    peer.on('signal', (data)=>{
      socket.emit('callUser',{
        userToCall:id,
        signalData:data,
        from:me,
        name:name
      })
    });

    peer.on('stream',(stream)=>{
      userVideo.current.srcObject=stream;
    });

    socket.on('callAccepted',(signal)=>{
      setCallAccepted(true);
      peer.signal(signal)
    });

    connectionRef.current=peer;
  }


  const answerCall=()=>{
    setCallAccepted(true);
    const peer=new Peer({
      initiator:false,
      trickle:false,
      stream: stream
    });
    
    peer.on('signal', (data)=>{
      socket.emit('answerCall',{
        signal:data,
        to:caller,
      })
    });

    peer.on('stream',(stream)=>{
      console.log('strrrrrreeam',stream);
      userVideo.current.srcObject=stream;
    });

    peer.signal(callerSignal);
    console.log('QSeZ7UkHf9BX4jP8AAEb',connectionRef.current)
    connectionRef.current=peer;
  }

  
  const leaveCall=()=>{
    setCallEnded(true);
    connectionRef.current.destroy();
  }

  

  return (
    <>
    {/* <JoinRoom/> */}
    <div>
      <Header usersStatus={usersStatus} setUsersStatus={setUsersStatus} chatStatus={chatStatus} setChatStatus={setChatStatus}/>


      <section className='flex bg-bgSecondary justify-between h-[86vh]'>
        <Participants/>

        <div className='flex-1'>


          <div>
            {stream && 
              <video playsInline autoPlay muted ref={myVideo} className='w-full h-[32vw]'/>
            }

            {callAccepted&& !callEnded ? 
              <video playsInline autoPlay muted ref={userVideo} className='w-full h-[32vw]'/> 
              : null
            }
            <p className='text-center text-white'>{calling&&'calling...'}</p>
            <p className='text-center text-blue-400'>{recievingCall && 'recievingCall ...'}</p>
          </div>


            {stream && <Controls callUser={callUser} recievingCall={recievingCall} setRecievingCall={setRecievingCall} answerCall={answerCall}/> }

            <ParticipantStream usersStatus={usersStatus} chatStatus={chatStatus}/>

        </div>

        <Chats usersStatus={usersStatus} chatStatus={chatStatus}/>
      </section>
      
      
      <Footer/>
    </div>
    </>
  )
}


export default App




// <header className='bg-black'><p>Talent Video</p></header>
// <div>
//   <div>
//     {stream&&<video playsInline autoPlay muted ref={myVideo} className='w-[30vw]'/>}
//     {callAccepted&& !callEnded ? 
//     <video playsInline autoPlay muted ref={myVideo} className='w-[30vw]'/> 
//     : null
//     }
//   </div>
//   <div>
//     <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
//     <CopyToClipboard text={me}>
//       <button>Copy Id</button>
//     </CopyToClipboard>
//     <input type='text' placeholder='Id to call' onChange={(e)=>setIdToCall(e.target.value)}/>

//   </div>
//   <div>
//     {callAccepted&& !callEnded ? 
//     <button onClick={leaveCall}>End Call</button>
//     : 
//     <button onClick={()=>callUser(idToCall)}>Call</button>
//     }
//   </div>
//   <div>
//     <p>{idToCall}</p>
//   </div>

//   <div>
//     {recievingCall&&callAccepted  ? 
//       <div>
//         <h1> {name} is calling</h1>
//         <button onClick={answerCall}>Answer</button>
//       </div>
//     : null}
//   </div>
// </div>