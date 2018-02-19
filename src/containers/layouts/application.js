import React, { Component } from 'react';
import Header from '../header'
import Navbar from '../navbar'
class Application extends Component {
  render() {
    return (
      <div className="s-vflex-outer">
        <div className="s-vflex-inner">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Application;
