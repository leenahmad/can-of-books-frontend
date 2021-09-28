import React from "react";
import Header from "./Header";
import IsLoadingAndError from "./IsLoadingAndError";
import Footer from "./Footer";
import Profile from "./components/Profile";
import BestBooks from "./BestBooks";
import Login from "./Login";
import { withAuth0 } from "@auth0/auth0-react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    console.log("app", this.props);
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header Authenticated={isAuthenticated} />
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <BestBooks /> : <Login />}
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/Profile">
                <Profile/>
              </Route>

              <BestBooks/>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
