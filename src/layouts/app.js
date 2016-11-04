import React from 'react'
import { Link } from 'react-router'
import Borders from "ui/borders"
import 'assets/styles/style.css'

export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <nav>
        <borders />
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
});