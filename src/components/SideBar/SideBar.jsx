import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import avatar from "../../assets/avatar.png";
import "./Sidebar.css";

function Sidebar({ handleEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="sidebar">
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
      <button 
        className="sidebar__edit-button"
        onClick={handleEditProfileClick}
        type="button"
      >
        Edit profile
      </button>
    </div>
  );
}

export default Sidebar;
