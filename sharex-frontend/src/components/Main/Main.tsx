import React from 'react'
import './Main.sass'


const Main = () => {
    return (
        <main className="mainContainer">

            <div className="statisticForm">
                <form action="" className="formContainer">
                    <div className="titleContainer">
                        <i className="fas fa-clipboard-list iconContainer" />
                        <div className="titleText">
                            Statistics
                        </div>
                    </div>

                    <div className="fieldContainer">
                        <div className="field">
                            <div className="fieldTitle">
                                <i className="fas fa-file-import" />
                                <div className="fieldText">

                                </div>
                            </div>
                        </div>
                    </div>  

                </form>
            </div>

            <div className="manageForm">
                <form action="" className="formContainer">
                    <div className="titleContainer">
                        <i className="fab fa-trello iconContainer" />
                        <div className="titleText">
                            Quick management
                            <div className="manageButtom">
                                New
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Main;
