import Participants from "../components/Participants";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JoinRoom from "../components/JoinRoom";
import Chats from "../components/Chats";
import {io} from 'socket.io-client';
import { useEffect, useRef, useState } from "react";

let socket=io.connect(import.meta.env.VITE_SOCKET_HOST, { secure: true });

export default function Index(){
    const [verified,setVerified] = useState(false);
    const [id, setId] = useState({});
    const [sidebar, setSidebar] = useState(false);
    const [message, setMessage] = useState('');
    const [chats, setChats] = useState([]);
    const [users, setUsers] = useState([]);
    const [room, setRoom] = useState('');
    console.log('loogs',import.meta.env.VITE_SOCKET_HOST||"Hi whats wrong");
    
    socket.on("connect", () => {
        console.log('ggg',socket.id);
        localStorage.setItem('token',socket.id);
    });
    socket.on('me',(arg)=>{
        console.log(arg);
        setId(arg);
    });

    socket.on('getRoom',(room)=>{
        setRoom(room);
    });

    useEffect(()=>{
        socket.on('message',(msg)=>{
            setVerified(true);
            setChats((prevChats) => [...prevChats, msg]);
            console.log({id:msg.id,userName:msg.userName,text:msg.text,time:msg.time});
        });
        console.log('Listening to message emit')
        socket.on('room-users',(users)=>{
            setUsers(users);
            console.log('Room Users',users);
        });

        return ()=> socket.off('message');
    });

    
    return(
        <>
            {!verified && <JoinRoom setVerified={setVerified} socket={socket}/>}
            <Header setSidebar={setSidebar} sidebar={sidebar}/>
            <div className="flex bg-bgSecondary h-[86vh]">
                <Participants sidebar={sidebar} users={users} room={room}/>
                <Chats socket={socket} chats={chats} id={id} setMessage={setMessage} message={message}/>
            </div>
            <Footer/>
        </>
    )
}