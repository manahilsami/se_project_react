import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./DeleteModal.css";

function DeleteModal({ activeModal, onClose, onDelete }) {
  return (
    <div
      className={`delete__modal modal__overlay ${
        activeModal === "delete-confirm" ? "modal_opened" : ""
      }`}
    >
      <div
        className={`delete__modal-content ${
          activeModal === "delete-confirm" && "modal_opened"
        }`}
      >
        <div className="delete__content">
          <button
            onClick={onClose}
            type="button"
            className="delete__close"
          ></button>
          <h2 className="delete__title">
            Are you sure you want to delete this item? This action is
            irreversible.
          </h2>
          <div className="delete__actions">
            <button onClick={onDelete} className="delete__confirm">
              Yes, delete item
            </button>
            <button onClick={onClose} className="delete__cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
