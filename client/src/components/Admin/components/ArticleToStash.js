import React from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import articles from "../../../data/articles";
import stashes from "../../../data/stashes";
import "./stash-list.scss";
import "./article-list.scss";

import Stash from "./Stash";
import Article from "./Article";

class ArticleToStash extends React.Component {
  addToStash = (article, stash) => {
    console.log("%s   TO   %s", article, stash);
  };

  render() {
    return (
      <div className="row">
        <div className="col col-3">
          <ul className="article-list">
            {articles.map((article, index) => (
              <li key={index}>
                <Article
                  title={article.title}
                  id={index}
                  handleDrop={(article, stash) =>
                    this.addToStash(article, stash)
                  }
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="col col-9">
          <div className="stash-list row">
            {stashes.map((stash, index) => (
              <div className="col col-3" key={index}>
                <Stash title={stash.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ArticleToStash);
