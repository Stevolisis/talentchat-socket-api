import { AiFillWechat } from 'react-icons/ai';

export default function Chats({socket,chats,id,message,setMessage}){
    const sendMessage = (e)=>{
        e.preventDefault();
        console.log('message',message||'ppppp');
        socket.emit('group-chat',message);
        setMessage('');
    }

    
    return(
        <>
            <nav className={`font-[PoppinsRegular] relative flex flex-1 flex-col justify-between border-l border-bgTertiary`}>
                <div className="bg-brTertiary text-sm flex items-center justify-between py-3 px-5 text-txtPrimary">
                    <p className='text-[13px] md:text-sm'>Chat Room</p> 
                    <AiFillWechat className='text-[26px]'/>
                </div>

                <div className="px-3 flex flex-col text-[9px] md:text-[11px] text-txtSecondary overflow-y-auto"> 
                    {
                        chats.current.map((chat,i)=>{
                            console.log('mmmmmmssssid',id !==chat.id)
                            return chat.id === id ?
                                <div className='flex justify-end' key={i}>
                                    <p className="p-1.5 md:p-2 w-fit text-sm text-right bg-brSecondary rounded-tr-md rounded-bl-md my-3"><span className='text-[10px] text-gray-500'>{chat.userName}, {chat.time}</span><br/>{chat.text}</p>
                                </div>
                                :
                                <div className='flex justify-start' key={i}>
                                    <p className="p-1.5 md:p-2 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3"><span className='text-[10px] text-gray-500'>{chat.userName}, {chat.time}</span><br/>{chat.text}</p>
                                </div>
                        })
                    }

                </div>

                <div className="w-full text-txtSecondary text-center text-xs my-3 px-3">
                    <form onSubmit={(e)=>sendMessage(e)}>
                        <input value={message} onChange={(e)=>setMessage(e.target.value)} className="bg-brPrimary w-full py-2 px-3 outline-none border-none rounded-md text-bgTertiary" type='text' placeholder="Send a message"/>
                    </form>
                </div>
            </nav>
        </>
    )
}