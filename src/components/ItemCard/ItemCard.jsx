import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import likedButton from "../../assets/liked-button.svg";
import unlikedButton from "../../assets/unliked-button.png";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  if (!currentUser) {
    return null;
  }

  const handleCardClick = () => {
    onCardClick(item);
  };

  const isLiked = item.likes.some((id) => id === currentUser._id);

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {currentUser && (
          <button
            className="card__like-button"
            onClick={handleLike}
            type="button"
          >
            <img
              src={isLiked ? likedButton : unlikedButton}
              alt={isLiked ? "Unlike" : "Like"}
              className="card__like-icon"
            />
          </button>
        )}
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
