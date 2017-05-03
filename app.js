require('bootstrap-webpack!./bootstrap.config.js');
var $ = require('jquery');
import React, {Component} from 'react';
import {render} from 'react-dom';
import currency from './currency';
import './style.css';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <nav className='navbar navbar-default navbar-static-top'>
                    <div className='container'>
                      <a href='#' className='navbar-brand'>SaluD/Os</a>
<button className='navbar-toggle' data-toggle='navbarHeaderCollapse'>
  <span className='icon-bar'></span>
    <span className='icon-bar'></span>
      <span className='icon-bar'></span>

</button>

                        <div className='collapse navbar-collapse navbarHeaderCollapse'>
                              <ul className='nav navbar-nav navbar-right'>
                                  <li><a href='#'>Home</a></li>
                                  <li><a href='#'>Social</a></li>
<li><a href='#'>About Us</a></li>
                                  <li><a href='#'>Info</a></li>
                              </ul>
                        </div>
                    </div>
                </nav>
            </div>

        );
    };
};
const mountNode = document.getElementById('app');
render(
    <App/>, mountNode);
