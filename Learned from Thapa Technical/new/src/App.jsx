import './App.css';
import React, { createContext } from 'react';
import CompB from './components/CompB';
import CompA from './components/CompA';
const Data = createContext();
const data = {
  name: "Mubashir",
  roll: "18SW27"
}
const App = () => {
  return (
    <>
      <Data.Provider value={data}> 
      {/* Here we are using Both Context API and useContext Hook by calling and passing data on each of them*/}
      <CompB></CompB>
      <CompA></CompA>
      </Data.Provider>
    </>
  );
}

export default App;
export { Data };
