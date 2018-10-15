import React from "react";
import { Auth, provider } from "../../config/firebase";
import AddArticle from "./components/AddArticle";
import ArticleToStash from "./components/ArticleToStash";

class Admin extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    Auth.signInWithRedirect(provider).then(result => {
      this.setState({
        user: result.user
      });
    });
  }

  logout() {
    Auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  componentDidMount() {
    Auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user
        });
      }
    });
  }

  render() {
    let user = this.state.user;

    let authButton = user ? (
      <button className="btn btn-sm" onClick={this.logout}>
        Log Out
      </button>
    ) : (
      <button className="btn btn-sm" onClick={this.login}>
        Log In
      </button>
    );

    let userEmail = user ? user.email : "";

    return (
      <main>
        <div className="container">
          {userEmail ? `Logged in as ${userEmail} ` : ""}
          {authButton}
          <div className="row">
            <div className="col col-3">
              <AddArticle />
            </div>
          </div>
          <ArticleToStash />
        </div>
      </main>
    );
  }
}

export default Admin;
