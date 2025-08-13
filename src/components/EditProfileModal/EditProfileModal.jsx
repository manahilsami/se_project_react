import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfileModal({
  onClose,
  isOpen,
  onEditProfileSubmit,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (isOpen && currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [isOpen, currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfileSubmit({ name, avatar });
  };

  return (
    <div className="editprofile-modal">
      <ModalWithForm
        title="Change profile data"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <label htmlFor="edit-name" className="modal__label-editprofile">
          Name *{" "}
          <input
            type="text"
            className="modal__input"
            id="edit-name"
            placeholder="Name"
            required
            minLength="1"
            maxLength="30"
            onChange={handleNameChange}
            value={name}
          />
        </label>
        <label htmlFor="edit-avatar" className="modal__label-editprofile">
          Avatar *{" "}
          <input
            type="url"
            className="modal__input"
            id="edit-avatar"
            placeholder="Avatar URL"
            onChange={handleAvatarChange}
            value={avatar}
          />
        </label>

        <button type="submit" className="modal__editprofile">
          Save changes
        </button>
      </ModalWithForm>
    </div>
  );
}
