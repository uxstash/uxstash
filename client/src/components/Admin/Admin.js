import React from "react";
import { Auth, provider } from "../../config/firebase";

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
      <button onClick={this.logout}> Log Out </button>
    ) : (
      <button onClick={this.login}> Log In </button>
    );

    let userEmail = user ? user.email : '';

    return (
      <main>
        <div className="container">
          {userEmail}
          <br/>
          {authButton}

        </div>
      </main>
    );
  }
}

export default Admin;
