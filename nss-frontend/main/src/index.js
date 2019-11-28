import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import Navbar from './Components/Navbar.jsx'
import Login from './Components/Login.jsx'
import Blog from './Components/Main_container.jsx'
import Units from './Components/Units.jsx'
import Register from './Components/Signup.jsx'
import Create_article from './Components/Create_article.jsx'
import {BrowserRouter,Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
    
    <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/Create_article" component={Create_article} />
        <Route path="/Units" component={Units} />
        <Route path="/Login" component={Login} />
        <Route path="/Notification" component={Blog} />
        <Route path="/Register" component={Register} />
        <Route path="/Main_container" component={Blog} />

    </BrowserRouter>
    
    
, document.getElementById('root'));
serviceWorker.unregister();
