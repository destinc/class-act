import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseList from './components/CourseList';
import SingleCourse from './components/ShowCourse';
import { Link, Redirect, Switch, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' />
        <Route exact path='/courses' component={CourseList}/>
        <Route exact path='/courses/:id' component={SingleCourse}/>


      </Switch>
    </div>
  );
}

export default App;
