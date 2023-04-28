import React,{  useEffect, useState, useRef } from 'react';
import { Peer } from "peerjs";
import { io } from 'socket.io-client';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './index.css';

const socket=io.connect(import.meta.env.VITE_SOCKET_HOST);

function App() {
  const peer = new Peer("pick-an-id");
  console.log(import.meta.env.VITE_SOCKET_HOST);

  return (
    <>
      <div><p>Talent Video</p></div>
      <div><h1>Video Chat App</h1></div>
    </>
  )
}


export default App;
