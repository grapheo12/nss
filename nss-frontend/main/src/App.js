import React,{Component} from 'react';
import Header from './Components/Header.jsx'
import Home_container from './Components/Home_container.jsx'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Units from './Components/Units'
import Blog from './Components/Blog'
import {BrowserRouter, Route} from 'react-router-dom';


class Home extends React.Component{
	
	
	render(){
			return(
				<BrowserRouter>
					<div>
						<Navbar />
						<Header />
						<Route exact path="/" component={Home_container} />
						<Route path="/Notifications" component={Units} />
						<Route path="/Units" component={Units} />
						<Route path="/Team" component={Units} />
						<Route path="/Blog" component={Blog} />
						<Footer />		    		
					</div>
				</BrowserRouter>
			)
	}
}

export default Home;
