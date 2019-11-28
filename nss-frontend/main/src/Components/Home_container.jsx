import React,{Component} from 'react';

class Home_container extends Component{
    render(){
        return(
            <div>
            <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <article className="mt-90">
              <header className="text-center mb-40">
                <h3>
                  NSS IIT Kharagpur
                </h3>
              </header>
              <div className="card-block">
                <p className="text-justify">National Service Scheme (NSS) is a voluntary organisation 
                launched in Gandhiji’s birth centenary year, 1969. The program aims to promote personality
                 development by means of participation in community service. Starting from a handful of 37 universities,
                 today it has got more than 3.2 million student volunteers from all over the country. In IIT-KGP, NSS has been made a part of core academic
                 curriculum for more than one-third of first and second year undergraduate students.
                 The programme comprises of weekly field work and a minimum of one annual camp.</p>
              </div>
            </article>
            <hr />
          </div>
        </div>
      </main>
            </div>
        )
    }
}

export default Home_container;