import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button1 ,Button2} from './components/Multiple';

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <h1>Hello World</h1>
        <Button1/>
        <h1>Bye World</h1>
<Button2/>
      </div>
    )
  }
}

export default App;
