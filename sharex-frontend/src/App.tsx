import React from "react";
import "./App.sass";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { useTypesSelector } from "./hooks/useTypeSelector";

const App = () => {

  // const user = localStorage.getItem("user")

  const isAuth: boolean = useTypesSelector((state) => {
    return state.reducer_login.user.length > 0;
  });

  console.log({ "app": isAuth })

  return (
    <>
      <div className="containerApp">
        <div className="container">
          <Header />
          {
            isAuth ?
              <ProfilePage />
              :
              <>
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
              </>
          }
        </div>
      </div>

    </>
  );
};

export default App;
