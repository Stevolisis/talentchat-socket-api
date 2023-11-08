import Participants from "../components/Participants";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JoinRoom from "../components/JoinRoom";
import Chats from "../components/Chats";
import {io} from 'socket.io-client';

const socket=io.connect(import.meta.VITE_SOCKET_HOST);
console.log('1111: ',import.meta.VITE_SOCKET_HOST);
export default function Index(){
    
    console.log('2222: ',import.meta.VITE_SOCKET_HOST);

    return(
        <>
            {/* <JoinRoom/> */}
            <Header/>
            <div className="flex bg-bgSecondary h-[86vh]">
                <Participants/>
                <Chats/>
            </div>
            <Footer/>
        </>
    )
}