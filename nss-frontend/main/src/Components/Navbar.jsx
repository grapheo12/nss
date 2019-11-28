import React,{Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';

 class Navbar extends Component{

    render(){
        return(
          <nav className="topbar topbar-expand-md topbar-sticky">
          <div className="container">
            <div className="topbar-left">
              <button className="topbar-toggler">☰</button>
              <Link className="topbar-brand" to="/">
                <h3 style={{color : 'white'}}>IIT Kharagpur</h3>
              </Link>
            </div>
            <div className="topbar-right">
              <ul className="topbar-nav nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">About US
                    <i className="fa fa-caret-down" />
                  </Link>
                  <div class="nav-submenu">
                    <Link class="nav-link" to="/Units">Units</Link>
                    <Link class="nav-link" to="/Team">Web Team</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript: document.body.scrollIntoView(false);">Contact Us</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Notifications">Notifications</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Blog">Our Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Submit">Submit Report</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        )
    }

 }

 export default Navbar;