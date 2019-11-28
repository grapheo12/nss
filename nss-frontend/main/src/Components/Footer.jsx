import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return(
            
                <footer className="site-footer" style={{backgroundColor: "#000000"}}>
        <div className="container">
        <div className="row gap-y align-items-center">
          <div className="col-12 col-lg-6">
            <img className="rounded" style={{height: "160px", margin: "auto"}} src="assets/img/nss-trans.png" alt="Logo" />
          </div>
            <div className="col-12 col-lg-6">
              <h3>Contact Us</h3>
              <ul style={{listStyleType: "none"}}>
                <li>
                  Professor-in-charge: Prof. Arghya Deb &nbsp; <a href="mailto:arghya@civil.iitkgp.ac.in">[arghya@civil.iitkgp.ac.in]</a>
                </li>
                <li>
                  Site Admin: &nbsp; <a href="mailto:nsskgpsite@gmail.com">[nsskgpsite@gmail.com]</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
           
        )
    }
}

export default Footer;