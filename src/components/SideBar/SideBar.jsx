import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import avatar from "../../assets/avatar.png";
import "./Sidebar.css";

function Sidebar({ handleEditProfileClick, handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        {currentUser?.avatar ? (
          <img
            className="sidebar__avatar"
            src={currentUser.avatar}
            alt={currentUser.name}
          />
        ) : (
          <div className="sidebar__avatar-placeholder">
            {currentUser?.name?.charAt(0).toUpperCase()}
          </div>
        )}
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>

      <div className="sidebar__buttons">
        <button
          className="sidebar__edit-button"
          onClick={handleEditProfileClick}
          type="button"
        >
          Change profile data
        </button>

        <button
          className="sidebar__signout-button"
          onClick={handleSignOut}
          type="button"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
