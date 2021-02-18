import React, { Component } from "react";
import "./App.css";

class FooterComponent extends Component {
  render() {
    const n = new Date().getFullYear();
    return (
      <div>
        <footer className="footer">
          <span className="text-muted">All Rights Reserved {n} ZahidAli</span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
