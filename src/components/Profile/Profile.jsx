import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({
  onCardClick,
  clothingItems,
  handleAddClick,
  handleEditProfileClick,
  onCardLike,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar handleEditProfileClick={handleEditProfileClick} />
      </section>
      <section className="profile__clothing">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          handleAddClick={handleAddClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
