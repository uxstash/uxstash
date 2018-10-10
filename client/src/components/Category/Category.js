import React from "react";
import categories from "./categories";
import stashes from "./stash_data";

const StashCard = props => {
  const { title, description, articles } = props.stash;
  return (
    <div>
      <h3>
        {title}
        <small>{articles.length}</small>
      </h3>
      <p>{description}</p>
    </div>
  );
};

class Category extends React.Component {
  constructor(props) {
    super(props);

    const categoryAndStashes = this.getCategoryAndStashes(
      props.location.pathname.substring(1)
    );

    this.state = categoryAndStashes;
  }

  componentWillReceiveProps(nextProps) {
    // get new category info
    const { category, stashes } = this.getCategoryAndStashes(
      nextProps.location.pathname.substring(1)
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
          {this.state.stashes.map((stash, index) => (
            <StashCard stash={stash} key={index} />
          ))}
        </div>
      </main>
    );
  }
}

export default Category;
