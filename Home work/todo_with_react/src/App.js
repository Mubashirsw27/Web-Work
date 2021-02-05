import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
function App() {

  //The useState() function is basically a hook which gives the control 
  //to set a state and update a State.

  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('');

  //The useEffect() function is also a hook and runs whenever the file reloads 
  //or runs when the its 2nd attribute's value is changed.

  useEffect(() => {
    //The code here fires...🔥 when the App.js loads
    db.collection('todo').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().task));
      setTodos(snapshot.docs.map(doc =>({id:doc.id ,todo: doc.data().task})));
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection("todo").add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  return (
    <div className="App">
      <h1>Hello World 🚀🚀</h1>
      <form>
        <FormControl>
          <InputLabel>✅Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button type={'submit'} disabled={!input} onClick={addTodo} variant="contained" color="primary">
          Add
        </Button>
      </form>
      <ul>
        {
          todos.map(todo => (
            <Todo todo={todo} />
          )
          )}
      </ul>
    </div>
  );
}
export default App;
