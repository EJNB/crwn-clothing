import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ShopPage from "./pages/shop/shoppage.component";
import Header from "./components/headers/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

const TopicDetail = (props) => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
    </div>
  );
};

const TopicList = () => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
