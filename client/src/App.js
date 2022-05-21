
import './App.css';
import io from "socket.io-client";
import { useEffect, useState } from 'react';

const socket = io.connect("http://localhost:3001");


function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState("");
  console.log(text);

  const sendMessage = () => {
    socket.emit("send_message", text );
  }

  useEffect(()=> {
    socket.on("receive_message", (data) => {
      setData(data);
    })
  }, [socket]);

  return (
    <div className="App">
      <h1>{data}</h1>
      <input type="text" placeholder='message ..' onChange={e => {setText(e.target.value)}}></input>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
