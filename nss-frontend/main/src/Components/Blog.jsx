import React from 'react'

export default function Blog(props){
    let blog_list = [
        {
            heading: "Fisrt Blog",
            time: "Nov 28, 2019",
            small: "We did this ....",
            body: "<p>We did this <br> <b>Lorel Ipsum</b></p>"
        },
        {
            heading: "Secund Blog",
            time: "Nov 28, 2019",
            small: "We did this ....",
            body: "<p>We did this <br> <b>Lorel Ipsum</b></p>"
        }
    ];

    return (
        <div>
            {blog_list.map((blog) => { return (
            <div>
                <main className="main-content bg-gray">
                    <div className="row">
                        <div className="col-12 col-lg-6 offset-lg-3">
                            <article className="mt-90">
                                <header className="text-center mb-40">
                                    <h3>
                                    {blog.heading}
                                    </h3>
                                    <time>{blog.time}</time>
                                </header>
                                <div className="card-block">
                                    <p className="text-justify" dangerouslySetInnerHTML={{__html: blog.body}}></p>
                                </div>
                            </article>
                            <hr />
                        </div>
                    </div>
                </main>
            </div>);
            })}
        </div>
    )
}