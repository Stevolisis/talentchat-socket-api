import { useState } from "react";

export default function JoinRoom({setVerified,socket}){
    const [userName,setuserName] = useState('');
    const [room,setRoom] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        socket.emit('setup',{name:userName,room:room});
    }

    return(
        <>
            <div className="w-[100vw] z-10 h-[100vh] fixed bg-bgSecondary flex justify-center items-center">
                <form onSubmit={(e)=>handleSubmit(e)} className="px-5 py-5 flex flex-col justify-center items-center bg-brSecondary w-[35vw] rounded-md">
                    <input value={userName} onChange={(e)=>setuserName(e.target.value)} name="user" type='text' className="mt-2 font-[PoppinsLight] text-xs bg-slate-200 w-full border-2 py-2 px-3 border-brTertiary outline-none rounded-md" placeholder="UserName"/>
                    <select value={room} onChange={(e)=>setRoom(e.target.value)} name="room" type='text' className="mt-2 font-[PoppinsLight] text-xs bg-slate-200 w-full border-2 py-2 px-3 border-brTertiary outline-none rounded-md" placeholder="Room">
                        <option>Javascript</option>
                        <option>PHP</option>
                        <option>Python</option>
                        <option>C++</option>
                    </select>
                    <button className="font-[PoppinsRegular] mt-2 px-20 py-2 rounded-md text-xs bg-brTertiary text-txtSecondary">Join Room</button>
                </form>
            </div>
        </>
    )
}