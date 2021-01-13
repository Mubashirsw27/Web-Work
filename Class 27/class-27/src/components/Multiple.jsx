import React from 'react';
class Button1 extends React.Component {
    render() {
        return (
            <button
                style={{ width: '80px', height: '50px', borderRadius: '10px', fontSize: '30px', fontFamily: 'Arial', color: 'white', backgroundColor: 'blue' ,cursor:'pointer'}}
            >Hi </button>
        )
    }
}
class Button2 extends React.Component {
    render() {
        return (
            <button style={{ width: '80px', height: '50px', borderRadius: '10px', fontSize: '30px', fontFamily: 'Arial', color: 'white', backgroundColor: 'blue' ,cursor:'pointer'}}>Bye </button>
        )
    }
}
export {
    Button1,
    Button2
}