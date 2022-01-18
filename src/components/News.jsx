import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import NewsContainer from "./NewsContainer";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const firstLetterCapital = (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  };
  useEffect(() => {
    fetchData();
    document.title = `OnlyNews - ${props.catagory === "" ? "Home" : firstLetterCapital(props.catagory)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catagory}&apiKey=${apiKey}&pageSize=12&page=${page}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    if(parsedData.articles){
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    }
  };
  return (
    <>
      <h1 className={`text-center mb-4 text-${props.mode==='light'?'dark':'light'}`}>
        OnlyNews -{" "}
        {props.catagory === ""
          ? "Top Headlines"
          : firstLetterCapital(props.catagory)}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length !== totalResults}
        loader={<LoadingSpinner mode={props.mode}/>}
      >
        {loading ? <LoadingSpinner mode={props.mode}/> : <NewsContainer articles={articles} mode={props.mode}/>}
      </InfiniteScroll>
    </>
  );
};
export default News;
