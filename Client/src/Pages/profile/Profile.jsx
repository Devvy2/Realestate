import { useSelector } from "react-redux";
import "./Profile.css";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="Profile-page">
      <div>
        <h1>Profile</h1>
        <form className="Profile-info">
          <img className="Profile-img" src={currentUser.avatar} alt="" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="Update-btn">UPDATE</button>
        </form>
        <div className="account-actions">
          <span>Delete account</span>
          <span>Sign out</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
