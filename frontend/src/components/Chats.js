import { AiFillWechat } from 'react-icons/ai';

export default function Chats({chatStatus}){
    console.log('rrv',chatStatus)

    return(
        <>
            <nav className={`md:right-0 right-[-24vw] duration-300 w-[24vw] font-[PoppinsRegular] absolute md:relative flex flex-col justify-between border-l border-bgTertiary`}>
                <div className="bg-brTertiary text-sm flex items-center justify-between py-3 px-5 text-txtPrimary">
                    <p className='text-[13px] md:text-sm'>Chat Room</p> 
                    <AiFillWechat className='text-[26px]'/>
                </div>

                <div className="px-3 flex flex-col text-[9px] md:text-[11px] text-txtSecondary overflow-y-auto"> 
                    <div className='flex justify-end'>
                        <p className="p-1.5 md:p-2 w-fit text-right bg-brSecondary rounded-tr-md rounded-bl-md my-3">Hi Whatsup?</p>
                    </div>

                    <div className='flex justify-start'>
                    <p className="p-1.5 md:p-2 w-fit bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Fine oo, how you dey?</p>
                    </div>

                    <div className='flex justify-end'>
                        <p className="p-1.5 md:p-2 w-fit text-right bg-brSecondary rounded-tr-md rounded-bl-md my-3">Omo i dey oo, wetin dey sup?</p>
                    </div>

                    <div className='flex justify-start'>
                        <p className="p-1.5 md:p-2 w-fit text-right bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Na Sallah today oo?</p>
                    </div>

                    <div className='flex justify-end'>
                        <p className="p-1.5 md:p-2 w-fit text-right bg-brSecondary rounded-tr-md rounded-bl-md my-3">Normal, wetin you cook?</p>
                    </div>

                    <div className='flex justify-start'>
                        <p className="p-1.5 md:p-2 w-fit text-right bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Fried Rice and Shawarma, you?</p>
                    </div>

                    <div className='flex justify-end'>
                        <p className="p-1.5 md:p-2 w-fit text-right bg-brSecondary rounded-tr-md rounded-bl-md my-3">Bad Guy, me i no ccok, i will go to Restaurant and chill there, i'm inviting you</p>
                    </div>

                    <div className='flex justify-start'>
                        <p className="p-1.5 md:p-2 w-fit text-right bg-bgTertiary rounded-tr-md rounded-bl-md my-3">Thanks, i dey come</p>
                    </div>
                </div>

                <div className="w-full text-txtSecondary text-center text-xs my-3 px-3">
                    <input className="bg-brPrimary w-full py-2 px-3 outline-none border-none rounded-md text-bgTertiary" type='text' placeholder="Send a message"/>
                </div>
            </nav>
        </>
    )
}