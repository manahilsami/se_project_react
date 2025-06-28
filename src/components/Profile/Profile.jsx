import ClothesSection from "../ClothesSection/ClothesSection";
import Sidebar from "../SideBar/SideBar";
import { defaultClothingItems } from "../../utils/constants";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection clothingItems={defaultClothingItems} />
      </section>
    </div>
  );
}

export default Profile;
