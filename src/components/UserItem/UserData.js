import React from "react";
import "./userdata.css";

const UserData = ({ name, profilepicture }) => {
  return (
    <div className="user-card">
      <div className="inner_card">
        <div className="image-container">
          <img src={profilepicture} alt="profile" className="real_img" />
        </div>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "10px",
            fontSize: "1.2rem",
          }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default UserData;
