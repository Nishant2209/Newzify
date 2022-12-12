import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="d-flex justify-content-center">
        <div
          className="card bg-black text-white"
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
            <h5
              className="card-title"
              style={{ fontSize: "1.4rem", fontWeight: "bold" }}
            >
              {title}....
            </h5>
            <p className="card-text" style={{ fontSize: "0.85rem" }}>
              {description}....
            </p>
            <p class="card-text">
              <small class="text-warning" style={{ fontSize: "0.85rem" }}>
                By {author ? author : "Unknown"} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <p class="card-text" style={{ fontSize: "0.85rem" }}>
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
