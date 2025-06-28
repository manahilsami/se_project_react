import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ clothingItems }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__titles">
        <p className="clothes-section__text">Your Items</p>
        <button className="clothes-section__add-button">+ Add New</button>
      </div>
      <ul className="cards__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              // onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
