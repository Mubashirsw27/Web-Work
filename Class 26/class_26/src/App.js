
import './App.css';
import React, { Component } from 'react';
function Header(){
  return(
    <h1>Hello</h1>
  );
}

class App extends Component {
  render() {
   
    return (
      <div className='header'>
    <Header />

    <h2 style={{color:"red" ,fontSize:'50px'}}>World</h2>
    </div>
    );
  }
}



export default App;
