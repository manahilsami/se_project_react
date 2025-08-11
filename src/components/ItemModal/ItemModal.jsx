import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemModal.css";

function ItemModal({ activeModal, onClose, onDelete, card }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = currentUser && card.owner === currentUser._id;

  return (
    <div
      className={`modal modal__overlay ${
        activeModal === "preview" ? "modal_opened" : ""
      }`}
    >
      <div
        className={`modal modal_item ${
          activeModal === "preview" && "modal_opened"
        }`}
      >
        <div className="item-modal__content modal__content_type_image">
          <button
            onClick={onClose}
            type="button"
            className="modal__close_item"
          ></button>
          <img src={card.link} alt={card.name} className="modal__image" />
          <div className="modal__footer">
            {isOwn && (
              <button
                onClick={onDelete}
                type="button"
                className="modal__delete_item"
              >
                Delete Item
              </button>
            )}
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
