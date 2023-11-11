
export default function Participants({sidebar}){

    return(
        <>
            <nav className={`min-[30vw] sm:min-w-[20vw] w-[30vw] sm:w-[20vw] ${sidebar ? '-ml-[0vw]' :'-ml-[30vw]'} sm:ml-0 font-[PoppinsRegular] overflow-y-auto border-r border-bgTertiary relative sm:block`}>
                <div className="bg-brTertiary text-sm flex items-center justify-between py-2 px-5 text-txtPrimary">
                    <p className="text-[13px] md:text-sm">Chat Room</p> 
                    <p className="py-2 px-3 bg-brSecondary rounded-md text-xs">7</p>
                </div>

                <div className="text-[11px] text-[PoppinsLight] text-txtTertiary">
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Daniel Rashda</div>
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Gadosh Lintel</div>
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Tasha Bush</div>
                </div>

                <div className="bg-brTertiary mt-10 text-sm flex items-center justify-between py-2 px-5 text-txtPrimary">
                    <p className="text-[13px] md:text-sm">Participants</p> 
                    <p className="py-2 px-3 bg-brSecondary rounded-md text-xs">7</p>
                </div>

                <div className="text-[11px] text-[PoppinsLight] text-txtTertiary">
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Daniel Rashda</div>
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Gadosh Lintel</div>
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Tasha Bush</div>
                </div>

            </nav>
        </>
    )
}