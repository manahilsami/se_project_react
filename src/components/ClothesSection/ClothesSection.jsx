import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ clothingItems, onCardClick, handleAddClick }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__titles">
        <p className="clothes-section__text">Your Items</p>
        <button
          onClick={handleAddClick}
          type="button"
          className="clothes-section__add-button"
        >
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
