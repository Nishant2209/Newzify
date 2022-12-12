import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title:
        "Pakistan resume 174 runs behind England on day two - radio & text",
      description:
        "Follow live text updates and BBC Test Match Special commentary from day two of the second Test between England and Pakistan at the Multan Cricket Stadium.",
      url: "http://www.bbc.co.uk/sport/live/cricket/62865930",
      urlToImage:
        "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
      publishedAt: "2022-12-10T05:07:28.5268391Z",
      content:
        "There's plenty of mist lingering across the stadium in Multan but we are set to start on time.\r\nUmpires Aleem Dar and Marais Erasmus head out on to the field, followed by the players.\r\nJames Anderson… [+264 chars]",
    },
    {
      source: {
        id: "news-com-au",
        name: "News.com.au",
      },
      author: null,
      title: "Prime Minister puts nail in Warner coffin",
      description:
        "<p>Former Australian Prime Minister Malcolm Turnbull has doubled down on his criticism of the Australian cricket team during the infamous ball-tampering scandal. </p>",
      url: "https://www.news.com.au/sport/cricket/prime-minister-puts-another-nail-in-warners-leadership-coffin/news-story/069f51d82ac98f84363ebc497ffba5ab",
      urlToImage:
        "https://content.api.news/v3/images/bin/87b4c3a632a664a94b89a7f0aca76c45",
      publishedAt: "2022-12-10T00:24:00Z",
      content:
        "Former Australian Prime Minister Malcolm Turnbull has doubled down on his criticism of the Australian cricket team during the infamous ball-tampering scandal. \r\nThe 68-year-old on Friday said he has … [+5571 chars]",
    },
    {
      source: {
        id: "google-news-in",
        name: "Google News (India)",
      },
      author: "India Today Web Desk",
      title:
        "Will cricket ties change between India, Pakistan? What foreign minister Jaishankar said",
      description:
        "As India and Pakistan continue to be at opposing ends, can there be an exception made for cricket, a sport that equally excites the two nations?",
      url: "https://www.indiatoday.in/india/story/will-cricket-ties-change-between-india-pakistan-what-foreign-minister-s-jaishankar-said-2307378-2022-12-09",
      urlToImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202212/asf_8662-sixteen_nine.jpg?VersionId=YwuVu6qL3XTlSGq0bFIj592quYBjepnx",
      publishedAt: "2022-12-09T15:37:05+00:00",
      content:
        "By India Today Web Desk: Will you talk to your neighbour if he holds a gun to your head? asked External Affairs Minister S Jaishankar at Agenda Aaj Tak while talking about holding dialogue with Pakis… [+1074 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec2682eeb8c345209fcc37b8d30343a8&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=ec2682eeb8c345209fcc37b8d30343a8&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
    window.scrollTo(0, 0);
  };

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=ec2682eeb8c345209fcc37b8d30343a8&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="container my-5">
        <h1
          className="text-center text-white my-5"
          style={{ fontWeight: "bold" }}
        >
          Top Headlines of India
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row" style={{ rowGap: "50px" }}>
          {!this.state.loading &&
            this.state.articles?.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container mt-5 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-light rounded-circle fs-4"
            onClick={this.handlePrevClick}
          >
            &larr;
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-light rounded-circle fs-4"
            onClick={this.handleNextClick}
          >
            &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
