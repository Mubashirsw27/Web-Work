import React  from 'react';
class About extends React.Component
{
  goToHome=()=>{
    this.props.history.push('/');
  }
render(){
  return(
    <div>
    <h1>About Page</h1>
    <button onClick={this.goToHome}>Go Back</button>
    </div>
  );
}
}
export default About;