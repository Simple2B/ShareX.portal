import React, { useState } from "react";
import "./Header.sass";
import Login from "../Login/Login";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import loginActions from "../../store/actions/actions_login";

const Header = () => {
  const isLogin = useTypesSelector((state) => {
    return state.reducer_login.isLogin;
  });

  const isAuth = useTypesSelector((state) => {
    return state.reducer_login.user.length > 0;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loginActions.openLoginAction(isLogin));
  };

  const logout = () => {
    dispatch(loginActions.logoutAction(""))
    localStorage.removeItem("user")
  }

  return (
    <header className="headerContainer">
      <div className="logo">lability.host</div>
      <div className="containerProfile" onClick={isAuth ? logout : handleClick}>
        <div className="profileIcon">
          <i className="fas fa-user-circle" />
        </div>
        <div className="profileText">
          {isAuth ? <span>Logout</span> : <span>Login</span>}
        </div>
      </div>
      {isAuth ? null : (isLogin && <div className="loginContainer"><Login /></div>)}
      <nav className="containerNav">
        <div className="containerSettings">
          <div className="containerIcon">
            <i className="fas fa-user-plus" />
          </div>
          <div className="containerText">Settings</div>
        </div>

        <div className="containerGallery">
          <div className="containerIcon">
            <i className="fas fa-photo-video" />
          </div>
          <div className="containerText">Gallery</div>
        </div>

        <div className="containerPremium">
          <div className="containerIcon">
            <i className="fas fa-star" />
          </div>
          <div className="containerText premiumText">
            Premium
            <div className="premiumButtom">New</div>
          </div>
        </div>

        <div className="containerMarkeplace">
          <div className="containerIcon">
            <i className="fas fa-shopping-bag" />
          </div>
          <div className="containerText markeplaceText">
            Marketplace
            <div className="markeplaceButtom">add</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
