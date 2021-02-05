

import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       name: 'Mubi'
//       ,
//       email: 'mubashirkhan786bhai@gmail.com'
//     }
//   }

//   changeName=()=>{
//     this.setState({
//       name : this.state.value
//     })
//   }

//   handleChange(e)
//   {
//     console.log(e.target.value)
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   get_props=(props)=>
//   {
//   console.log(props);
//   }
//   render() {
//     return (
//       <div>
//         <Navbar name={this.state.name} get_props={this.get_props} />

//         <div className='main'>

//           <h3>Name :  {this.state.name}</h3>

//           <h5>Email :  {this.state.email}</h5>
//           <input type="text" name="name" id=""   onChange={
//             (e)=>
//             {
//               this.handleChange(e);

//               // this.setState({
//               //   value: e.target.value
//               //  }
//               // )
//             }
//           }/>
//           <br/>
//             <input type="text" name="email" onChange={
//             (e)=>
//             {
//               this.handleChange(e);
//             }
//           }/>
//           <br />
//           <button 
//           onClick={this.changeName}   
//           className='mx-auto'
//           >
//             Change Name : </button>
//         </div>
//       </div>
//     )
//   }
// }
// export default App;
import AppRouter from './config/router'
class App extends React.Component
{
render(){
  return(
    <AppRouter/>
  );
}
}
export default App;