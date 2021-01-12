
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
      <div className='header'>
        <Header />
        <TextField/>
        <button type="button" className="btn btn-warning">Warning</button>
        <h2 style={{ color: "red", fontSize: '30px' }}>World</h2>
        <img src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg" width='300px' alt="" />
        <Footer />
      </div>
    );
  }
}



export default App;
