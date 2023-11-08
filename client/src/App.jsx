import React from "react";
import Index from './containers';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './index.css';

export default function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='*' element={<div className='w-full h-[80vh] flex justify-center items-center text-2xl'>Invalid Route</div>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}



