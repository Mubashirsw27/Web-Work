
import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextField from './components/TextField';



// function Header(){
//   return(
//     <h1>Hello</h1>
//   );
// }

class App extends Component {
  render() {

    return (
      <div>
        <div className='todo'>
        <h1>Todo App</h1>
        </div>
      </div>
    );
  }
}



export default App;
