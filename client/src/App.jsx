import React,{  useEffect, useState, useRef } from 'react';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './index.css';


function App() {

  return (
    <>
      <div><p>Talent Video</p></div>
      <div><h1>Video Chat App</h1></div>
    </>
  )
}


export default App;
