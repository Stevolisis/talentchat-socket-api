import { FaMicrophone } from 'react-icons/fa'
import { IoMdVideocam, IoMdCall } from 'react-icons/io'

export default function Controls(){

    return(
        <>
            <div className='mt-[-75px]'>
                <div className='flex justify-center'>
                    <button className='w-12 h-12 mx-2 rounded-full flex justify-center items-center text-txtPrimary hover:bg-brSecondary duration-300 bg-brTertiary'><IoMdVideocam/></button>
                    <button className='w-12 h-12 mx-2 rounded-full flex justify-center items-center text-txtPrimary hover:bg-brSecondary duration-300 bg-brTertiary'><FaMicrophone/></button>
                    <button className='w-12 h-12 mx-2 rounded-full flex justify-center items-center text-txtPrimary hover:bg-red-400 duration-300 bg-red-600'><IoMdCall/></button>
                </div>
            </div>
        </>
    )
}