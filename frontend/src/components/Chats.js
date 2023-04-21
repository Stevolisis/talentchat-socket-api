import { AiFillWechat } from 'react-icons/ai';

export default function Chats(){

    return(
        <>
            <nav className="w-[22vw] font-[PoppinsRegular] flex flex-col justify-between border-l border-bgTertiary">
                <div className="bg-brTertiary text-sm flex items-center justify-between py-3 px-5 text-txtTertiary">
                    <p>Chat Room</p> 
                    <AiFillWechat className='text-[26px]'/>

                </div>
                <div className="text-right w-full px-3 text-xs pt-4 text-txtSecondary overflow-y-auto"> 
                    <p className="p-3 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Hi Whatsup?</p>
                    <p className="p-3 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Fine oo, how you dey?</p>
                    <p className="p-3 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Fine oo, how you dey?</p>
                    <p className="p-3 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Fine oo, how you dey?</p>
                    <p className="p-3 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Fine oo, how you dey?</p>
                    <p className="p-3 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Fine oo, how you dey?</p>

                    <p className="p-3 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Fine oo, how you dey?</p>
                    <p className="p-3 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Fine oo, how you dey?</p>
                    <p className="p-3 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Fine oo, how you dey?</p>
                    <p className="p-3 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Fine oo, how you dey?</p>
                </div>
                <div className="w-full text-txtSecondary text-center text-xs my-3">
                    <input className="bg-brPrimary py-2 px-3 outline-none border-none rounded-md text-bgTertiary" type='text' placeholder="Send a message"/>
                </div>
            </nav>
        </>
    )
}