

export default function Header(){

    return(
        <>
            <header className="bg-bgPrimary text-txtTertiary p-5 flex justify-between items-center">
                <h1 className="font-[AmazingKids] text-3xl">TalentVideo</h1>
                <button className="font-[PoppinsMedium] text-sm py-3 px-5 bg-bgSecondary rounded">Create Room</button>
            </header>
        </>
    )
}