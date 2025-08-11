import { useContext } from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ handleAddClick, weatherData, handleLoginClick, handleRegisterClick }) {
  const currentUser = useContext(CurrentUserContext);
  
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" alt="Header Logo" src={logo} />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <div className="header__right">
        <ToggleSwitch />
        
        {currentUser ? (
          // Authorized user view
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add clothes
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-container">
                <p className="header__username">{currentUser.name}</p>
                <img
                  src={currentUser.avatar || avatar}
                  alt={currentUser.name}
                  className="header__avatar"
                />
              </div>
            </Link>
          </>
        ) : (
          // Non-authorized user view
          <div className="header__auth-buttons">
            <button
              onClick={handleRegisterClick}
              type="button"
              className="header__register-btn"
            >
              Sign Up
            </button>
            <button
              onClick={handleLoginClick}
              type="button"
              className="header__login-btn"
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
