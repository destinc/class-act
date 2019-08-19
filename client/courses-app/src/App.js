import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseList from './components/CourseList/'
import { Link, Redirect } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
        <CourseList />
      
      <Footer />
    </div>
  );
}

export default App;
