import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
            <header className="header header-inverse" style={{backgroundImage: "url(assets/img/kgp.jpg)"}} data-overlay={8}>
            <div className="container text-center">
              <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2">
                  <h1>National Service Scheme</h1>
                  <p className="fs-20 opacity-70">Dedicated to the Service of Nation</p>
                </div>
              </div>
            </div>
          </header>
        )
    }
}

export default Header;