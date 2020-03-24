import React from "react";
import { getUser, removeUserSession } from "../../util/Common";
import PlaceHolder from "./Placeholder";
import Popup from "./Popup";
import "./default.css";

const Dashboard = props => {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <section className="dashboard">
      <div className="dashboard__header">
        <div className="dashboard__header__profile-section">
          <Popup user={user} handleLogout={handleLogout} />
          {/* <input
            className="dashboard__logout-btn"
            type="button"
            onClick={handleLogout}
            value="Logout"
          /> */}
        </div>
      </div>
      <p>Welcome {user}!</p>
      <PlaceHolder />
    </section>
  );
};

export default Dashboard;
