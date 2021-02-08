
import React,{useContext} from 'react';
import {Data} from '../App';
const CompA = () => {
  const data = useContext(Data);
    return (
    <>
      <h1>hi Its 2 {data.name}</h1>
    </>
  );
}

export default CompA;
