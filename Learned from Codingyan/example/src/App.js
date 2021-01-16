import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Contact from './Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
    <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/courses' component={Courses}></Route>
    <Route exact path='/contact' component={Contact}></Route>
    <Redirect to="/"></Redirect>
    </Switch>
    </div>
  );
}

export default App;
