import Participants from "../components/Participants";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JoinRoom from "../components/JoinRoom";
import Chats from "../components/Chats";
import {io} from 'socket.io-client';
import { useEffect, useRef, useState } from "react";

let socket=io.connect(import.meta.env.VITE_SOCKET_HOST);

export default function Index(){
    const [verified,setVerified] = useState(false);
    const [id, setId] = useState({});
    const [sidebar, setSidebar] = useState(false);
    const [message, setMessage] = useState('');
    const chats = useRef([]);

    socket.on("connect", () => {
        console.log('ggg',socket.id);
        localStorage.setItem('token',socket.id);
    });
    socket.on('me',(arg)=>{
        console.log(arg);
        setId(arg);
    });

    const sendMessage = (e)=>{
        e.preventDefault();
        console.log('message',message||'ppppp');
        socket.emit('group-chat',message);
        setMessage('');
    }

    useEffect(()=>{
        socket.on('message',(msg)=>{
            console.log(msg)
            setVerified(true);
            chats.current.push(msg);
            console.log({id:id,name:msg.username,text:msg.text,time:msg.time});
        });
    });

    
    return(
        <>
            {!verified && <JoinRoom setVerified={setVerified} socket={socket}/>}
            <Header setSidebar={setSidebar} sidebar={sidebar}/>
            <div className="flex bg-bgSecondary h-[86vh]">
                <Participants sidebar={sidebar}/>
                <Chats chats={chats} id={id} sendMessage={sendMessage} setMessage={setMessage} message={message}/>
            </div>
            <Footer/>
        </>
    )
}