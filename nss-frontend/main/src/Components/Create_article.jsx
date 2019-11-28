import React,{Component} from 'react';

class Create_article extends Component{
    render(){
        return(
            <div>
        
        
        <header className="header header-inverse bg-fixed" style={{backgroundImage: 'url(assets/img/bg-laptop.jpg)'}} data-overlay={8}>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h1>Write an article</h1>
            </div>
          </div>
        </div>
      </header>

        <main className="main-content">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <form className="p-30 bg-gray rounded" method="POST" data-form="mailer">
                  <div className="row">
                    <div className="form-group col-md-12 my-5">
                      <input type="file" className="form-control" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <input className="form-control form-control-lg" type="text" name="name" placeholder="Title" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <select name id className="form-control form-control-lg">
                        <option value>Select category</option>
                        <option value>Vuejs</option>
                        <option value>Reactjs</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control form-control-lg" rows={4} placeholder="Content" name="message" defaultValue={""} />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-lg btn-primary" type="submit">Create Article</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>



     <footer className="site-footer">
        <div className="container">
          <div className="row gap-y align-items-center">
            <div className="col-12 col-lg-6 offset-lg-3">
              <ul className="nav nav-primary nav-hero">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Bahdcasts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
            </div>
        )
    }
}

export default Create_article;