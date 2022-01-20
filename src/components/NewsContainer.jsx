import React from 'react'
import NewsCard from './NewsCard'

function NewsContainer({ articles, mode }) {
    const articlesMap = (article,index) =>{
        return (<NewsCard key={index} article={article} mode={mode}/>);
    }
    return (
        <div className={`container row justify-content-around text-${mode==='light'?'dark':'light'}`}>
            {articles.map(articlesMap)}
        </div>
    )
}

export default NewsContainer
