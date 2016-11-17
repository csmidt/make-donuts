import React from 'react'
import { Link } from 'react-router'
import Borders from "ui/borders"
import 'assets/styles/style.css'



export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <nav>
          <Borders />
        </nav>
        <main>
          <div className="sidebar">
            <ul className="sidebarlist">
              <li> My Recipes</li>
              <li> Public Recipes</li>
              <li> Popular Recipes</li>
              <li> My Favorite Recipes</li>
              <li> My Pantry</li>
            </ul>
          </div>
          <div className="marginAuto">
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
});