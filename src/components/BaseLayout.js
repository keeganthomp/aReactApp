import React, { Component } from "react";
import "../styles/App.css";
import Header from './Header';
import Footer from './Footer';
import ParentComponent from'./ParentComponent';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
          <ParentComponent/>
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;
