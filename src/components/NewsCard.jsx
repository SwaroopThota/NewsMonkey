import React from 'react'

function NewsCard({ article, mode }) {
    return (
        <div className={`card col-lg-4 col-md-6 my-4 bg-${mode} ${mode==='light'?'':'border-secondary'}`}>
            <img src={!article.urlToImage?'https://yt3.ggpht.com/ytc/AKedOLQisbiXxC546al_Q-Ip6UhPBa7xfAnhAY5aJGePkg=s900-c-k-c0x00ffffff-no-rj':article.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <p className="card-text text-muted">By {article.author?article.author:'Unkown'} on {new Date(article.publishedAt).toLocaleString('en-IN')}</p>
                <span 
                style={{ right:'0%',zIndex:'1' }}
                className="position-absolute top-0 badge rounded-pill bg-danger">
                    source: {article.source.name}
                    <span className="visually-hidden">source</span>
                </span>
                <a href={article.url} target='_blank' className={`btn btn-${mode==='light'?'primary':'light'}`} rel="noreferrer">Read more</a>
            </div>
        </div>
    )
}

export default NewsCard
