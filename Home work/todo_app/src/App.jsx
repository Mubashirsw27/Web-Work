import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Form from './components/Form'


class App extends Component
{
  render(){
    return(
      <div>
        <div className='todo'>
        <h1>Todo App</h1>
        <Form />
        </div>
      </div>
    );
  }
}
export default App;
