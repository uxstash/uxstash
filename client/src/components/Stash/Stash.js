import React from "react";
import stashes from "../../data/stashes";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

class Stash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stash: {}
    };
  }
  componentDidMount() {
    // get stash data from data file
    const stash = stashes.filter(
      stash => stash.id === this.props.match.params.id
    )[0];

    this.setState({
      stash
    });
  }
  render() {
    const { title, description, articles, category } = this.state.stash;
    return (
      <main>
        <div className="container">
          <h1>
            <Link
              className="btn-back"
              to={`/${category && category.toLowerCase()}`}
            >
              <IoMdArrowBack />
            </Link>
            {title}
          </h1>
          <p className="description">{description}</p>

          <div className="table">
            <div className="table-row table-header">
              <div className="table-col x2">About</div>
              <div className="table-col">Source</div>
              <div className="table-col">Date</div>
            </div>
            {articles &&
              articles.map((article, index) => {
                const { url, title, source } = article;
                return (
                  <div className="table-row table-body" key={index}>
                    <div className="table-col x2">
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                      </a>
                    </div>
                    <div className="table-col">{source}</div>
                    <div className="table-col">date</div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    );
  }
}

export default Stash;
