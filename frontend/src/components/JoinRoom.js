
export default function JoinRoom(){

    return(
        <>
            <div className="w-[100vw] h-[100vh] fixed bg-bgSecondary flex justify-center items-center">
                <form className="px-5 py-5 flex flex-col justify-center items-center bg-brSecondary w-[35vw] rounded-md">
                    <input type='text' className="font-[PoppinsLight] text-xs bg-slate-200 w-full border-2 py-2 px-3 border-brTertiary outline-none rounded-md" placeholder="Room Id"/>
                    <button className="font-[PoppinsRegular] mt-2 px-20 py-2 rounded-md text-xs bg-brTertiary text-txtSecondary">Join Room</button>
                </form>
            </div>
        </>
    )
}