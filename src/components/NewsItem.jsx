import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div>
        <div
          className="card bg-black text-white border border-white border-3"
          style={{ height: "33rem", width: "20rem" }}
        >
          <img
            src={
              !imageUrl
                ? "https://media.istockphoto.com/id/1211671464/vector/landscape.jpg?b=1&s=612x612&w=0&k=20&c=iyGF8L1QB6DaSNPWnC7jRfsAyfUDVkqqzNRosaR_aww="
                : imageUrl
            }
            className="card-img-top"
            alt="Not Found"
          />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....</p>
            <p class="card-text">
              <small class="text-warning">
                By {author ? author : "Unknown"} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <p class="card-text">
              <small class="text-warning">Source: {source}</small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-light"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;