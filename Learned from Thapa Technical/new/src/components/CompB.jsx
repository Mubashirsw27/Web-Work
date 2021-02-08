import { Data } from '../App';
import React from 'react';
const CompB = () => {
    return (
        <>
            <Data.Consumer>
                {(data) => {
                    return(
                        <h1>Hi My Name is {data.name} and roll no is  {data.roll} </h1>
                    )
                }}
            </Data.Consumer>
        </>
    );
}

export default CompB;
