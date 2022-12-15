import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    window.scrollTo(0, 0);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  return (
    <div className="container">
      <h1
        className={`text-center text-${props.mode === "dark"? "white": "black"}`}
        style={{ fontWeight: "bold", marginTop: "120px"}}
      >
        Top Headlines of India
      </h1>
      {loading && <Spinner />}
      <div className="row" style={{ rowGap: "50px", marginTop: "75px" }}>
        {!loading &&
          articles?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  source={element.source.name}
                  mode={props.mode}
                />
              </div>
            );
          })}
      </div>
      <div className="container mt-5 d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className={`btn btn-${props.mode === "dark"? "light": "dark"} rounded-circle fs-4`}
          onClick={handlePrevClick}
        >
          &larr;
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          type="button"
          className={`btn btn-${props.mode === "dark"? "light": "dark"} rounded-circle fs-4`}
          onClick={handleNextClick}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
