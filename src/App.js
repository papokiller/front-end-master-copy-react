import React, { Component } from 'react';
import Header from './containers/header'
import Navbar from './containers/navbar'
import CoursesContainer from './components/courses/coursesContainer'
import Course from './components/courses/course'
class App extends Component {
  render() {
    return (
      <div className="s-vflex-outer">
        <div className="s-vflex-inner">
          <Header />
          <Navbar />
          <CoursesContainer>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
          </CoursesContainer>
        </div>
      </div>
    );
  }
}

export default App;
