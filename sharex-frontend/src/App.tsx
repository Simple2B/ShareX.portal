import React from 'react'
import './App.sass'
import Header from "./components/Header/Header"

const App = () => {
  return (
    <div className="containerApp">
      <div className="container">
        <Header/>

        <article className="articleContainer">
          <div className="articleTitle">
            <div className="articleTitleWelcom">Welcome,</div>
            <div className="articleTitleButtom">onlepes</div>
          </div>
          <div className="articleText">
            View detailed statistics or quickly <br/> 
            manage often used tasks.
          </div>
        </article>

        <main>

        </main>

      </div>
    </div>
  );
}

export default App;
