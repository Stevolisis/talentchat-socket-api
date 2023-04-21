

export default function ParticipantStream({myVid,stream}){

    return(
        <>
            <div className="p-3">
                <div className="flex items-center justify-start">
                    <div className="w-20 h-20 rounded-full">
                        <video className='w-20 h-20 min-w-20 min-h-20 rounded-full' controls playsInline autoPlay muted className='w-full h-[32vw]'/>
                        <source src="./videos/movie.mp4" type="video/mp4"/>
                    </div>

                    <div className="w-20 h-20 rounded-full">
                        <video className='w-20 h-20 min-w-20 min-h-20 rounded-full' controls playsInline autoPlay muted className='w-full h-[32vw]'/>
                        <source src="./videos/movie.mp4" type="video/mp4"/>
                    </div>

                    <div className="w-20 h-20 rounded-full">
                        <video className='w-20 h-20 min-w-20 min-h-20 rounded-full' controls playsInline autoPlay muted className='w-full h-[32vw]'/>
                        <source src="videos/movie.mp4" type="video/mp4"/>
                    </div>

                    <div className="w-20 h-20 rounded-full">
                        <video className='w-20 h-20 min-w-20 min-h-20 rounded-full' controls playsInline autoPlay muted className='w-full h-[32vw]'/>
                        <source src="./videos/movie.mp4" type="video/mp4"/>
                    </div>
                </div>
            </div>
        </>
    )
}