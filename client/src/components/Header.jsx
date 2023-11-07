import { AiFillWechat, AiOutlineUser } from "react-icons/ai";

export default function Header({setUsersStatus,usersStatus,setChatStatus,chatStatus}){

    return(
        <>
            <header className="bg-bgPrimary text-txtTertiary p-5 flex justify-between items-center">
                <h1 className="font-[AmazingKids] text-3xl">TalentVideo</h1>
                <div className="flex items-center justify-center">
                    <button className="font-[PoppinsMedium] mx-2 text-sm py-3 px-5 bg-bgSecondary rounded">Create Room</button>
                    <AiOutlineUser onClick={()=>setUsersStatus(!usersStatus)} className='text-[26px] mx-2 cursor-pointer block md:hidden'/>
                    <AiFillWechat onClick={()=>setChatStatus(!chatStatus)} className='text-[26px] mx-2 cursor-pointer block md:hidden'/>
                </div>
            </header>
        </>
    )
}