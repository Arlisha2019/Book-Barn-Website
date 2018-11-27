import React, { Component } from 'react';
import './Header.css'


export class Header extends Component {

    render() {
      return (
    <div>
      <h1 className="headTitle">Welcome to My Book Club </h1>
      <div>
        <ul className="menu">
          <li>Home</li>
          <li>My Books</li>
          <li>Language</li>
        </ul>
      </div>
    </div>
      )
    }
}
