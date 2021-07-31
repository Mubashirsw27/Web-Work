import { Data } from '../App';
import React from 'react';
const CompB = () => {
    return (
        <>
            <Data.Consumer>
                {(data) => {
                    return (
                        <div>
                            <h1>Hey Its Component B</h1>
                            <h1>Hi My Name is {data.name} and roll no is  {data.roll} </h1>
                        </div>
                    )
                }}
            </Data.Consumer>
        </>
    );
}

export default CompB;
