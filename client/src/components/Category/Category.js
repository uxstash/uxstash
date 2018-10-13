import React from "react";
import categories from "../../data/categories";
import stashes from "../../data/stashes";
import "./category.scss";
import { NavLink } from "react-router-dom";

const StashCard = props => {
  const { title, description, articles, id } = props.stash;
  return (
    <NavLink to={`/stash/${id}`} className="stash-card">
      <h3>
        {title}
        <small>{articles.length} resources</small>
      </h3>
      <p>{description}</p>
    </NavLink>
  );
};

class Category extends React.Component {
  constructor(props) {
    super(props);

    const categoryAndStashes = this.getCategoryAndStashes(
      props.match.params.category
    );

    this.state = categoryAndStashes;
  }

  componentWillReceiveProps(nextProps) {
    // get new category info
    const { category, stashes } = this.getCategoryAndStashes(
      nextProps.match.params.category
    );
    this.setState({
      category,
      stashes
    });
  }

  getCategoryAndStashes(categoryFromPath) {
    // get category info from data
    const category = this.getCategoryInfo(categoryFromPath);

    // get matching stashes
    const stashes = this.getRelevantStashes(category.title);

    return {
      category,
      stashes
    };
  }

  getCategoryInfo(categoryName) {
    const category = categories.filter(
      category => category.title.toLowerCase() === categoryName
    );

    return category[0];
  }

  getRelevantStashes(category) {
    category = category.toLowerCase();
    return stashes.filter(stash => stash.category.toLowerCase() === category);
  }

  render() {
    const { title, subtitle, description } = this.state.category;
    return (
      <main>
        <div className="container">
          <h1>
            {title}
            <br />
            {subtitle}
          </h1>
          <p>{description}</p>
        </div>
        <div className="container">
          <div className="stash-list">
            {this.state.stashes.map((stash, index) => (
              <StashCard stash={stash} key={index} />
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default Category;
