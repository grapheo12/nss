import React,{Component} from 'react';
import Article from './Article.jsx';

class Blog extends Component{
    render(){
        return(

            <div>

                    <header className="header header-inverse" style={{backgroundImage: 'url(assets/img/bg-gift.jpg)'}} data-overlay={8}>
                      <div className="container text-center">
                        <div className="row">
                          <div className="col-12 col-lg-8 offset-lg-2">
                            <h1>Here are Recent notifications</h1>
                          </div>
                        </div>
                      </div>
                    </header>

            <Article />

            <Article />

            <Article />
        
      
            </div>
        )
    }
}

export default Blog;