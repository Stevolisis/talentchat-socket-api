import Participants from "../components/Participants";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JoinRoom from "../components/JoinRoom";
import Chats from "../components/Chats";

export default function Index(){

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