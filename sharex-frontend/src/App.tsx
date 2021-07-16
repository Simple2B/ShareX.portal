import React from "react";
import "./App.sass";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <>
      <Route
        exact
        path="/"
        render={() => (
          <div className="containerApp">
            <div className="container">
              <Header />

              <article className="articleContainer">
                <div className="articleTitle">
                  <div className="articleTitleWelcom">Welcome,</div>
                  <div className="articleTitleButtom">onlepes</div>
                </div>
                <div className="articleText">
                  View detailed statistics or quickly <br />
                  manage often used tasks.
                </div>
              </article>

              <Main />
            </div>
          </div>
        )}
      />
      {/* <Route
        exact
        path="/login"
        render={() => (
          <div className="loginContainer">
            <Login />
          </div>
        )}
      /> */}
    </>
  );
};

export default App;
