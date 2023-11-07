

export default function Participants({}){

    return(
        <>
            <nav className="w-[20vw] font-[PoppinsRegular] overflow-y-auto border-r border-bgTertiary">
                <div className="bg-brTertiary text-sm flex items-center justify-between py-2 px-5 text-txtPrimary">
                    <p className="text-[13px] md:text-sm">Participants</p> 
                    <p className="py-2 px-3 bg-brSecondary rounded-md text-xs">7</p>
                </div>

                <div className="text-[11px] text-[PoppinsLight] text-txtTertiary">
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Daniel Rashda</div>
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Gadosh Lintel</div>
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Tasha Bush</div>
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Jun en' Li</div>
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Ramos Rodriquez</div>
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Elena Randy</div>
                    <div className="px-5 py-2 cursor-pointer hover:bg-brSecondary duration-300">Steven James</div>
                </div>

            </nav>
        </>
    )
}