

export default function Chats(){

    return(
        <>
            <nav className="w-[22vw] font-[PoppinsRegular] overflow-y-auto border-l border-bgTertiary">
                <div className="text-xs text-txtSecondary"> 
                    <p>Hi Whatsup?</p>
                    <p>Fine oo, how you dey?</p>
                </div>
                <div className="text-txtSecondary text-xs">
                    <input className="bg-brPrimary py-3 px-4 outline-none border-none rounded-md text-bgTertiary" type='text' placeholder="Send a message"/>
                </div>
            </nav>
        </>
    )
}