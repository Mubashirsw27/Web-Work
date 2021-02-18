
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './Components/Message';
import db from './config/firebase';
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import messenger from './Images/messenger.png';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
function App() {
  const [input, setInput] = useState('');//For Setting and Getting the Input
  const [messages, setMessages] = useState([]);
  const [userName, setUser] = useState('');


  useEffect(() => {
    setUser(prompt("Enter your Name :"));
    //runs code here 
    //This will run once,on Reload when the [] is blank 
    //if [] isn't blank so it will change everytime the condition
    //Given in the [] changes
  }, [])//condition

  useEffect(() => {
    db.collection("messages").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log("Data=>", snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })));
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, messag: doc.data() })));
    })
  }, [])

  const sendMessage = (event) => {
    //All the Sending Message Logic
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, { username: userName, message: input }])
    setInput('');
  }
  return (
    <div className="App">
      <img src={messenger} width="100px"></img>
      <h1>Hello Programmers💻</h1>
      <h3>Welcome {userName}</h3>
      <form className="app_form">
        <FormControl className="app_formControl">
          {/* <InputLabel >Enter A Message.....</InputLabel> */}
          <Input className="app_input" placeholder='Enter Something' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app_IconBtn" disabled={!input} type="submit" onClick={sendMessage} variant="contained" color="primary">
            <SendIcon/>
          </IconButton>
          {/* <Button disabled={!input} type="submit" onClick={sendMessage} variant="contained" color="primary">Send Data</Button> */}
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id,messag}) => {
            return (
              <Message key={id} username={userName} message={messag} />
            )
          })
        }
      </FlipMove>
    </div>
  );
}

export default App;
