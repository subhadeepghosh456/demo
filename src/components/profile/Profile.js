import React from "react";
import { useLocation } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const { state } = useLocation();
  const { profilepicture, name, username, email, phone, website } = state;
  console.log(state);
  return (
    <div className="outer_body">
      <aside>
        <div className="side_bar">
          <div>Profile</div>
          <div>Post</div>
          <div>Gallery</div>
          <div>ToDo</div>
        </div>
      </aside>
      <main>
        <div className="main_body">
          <div className="Header_section">
            <div className="header_container">
              <div style={{ fontSize: "1.5rem" }}>Profile</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "200px",
                  gap: "10px",
                }}
              >
                <img
                  src={profilepicture}
                  alt="profile"
                  style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                />
                <p>{name}</p>
              </div>
            </div>
          </div>
          <div className="profile_details">
            <div className="col-one">
              <img
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                src={profilepicture}
                alt="profile_picture"
              />
              <p>{name}</p>
              <div className="user_container">
                <div className="user_information">
                  <div>
                    UserName <span>:</span>{" "}
                  </div>
                  <div>Rahul</div>
                </div>

                <div className="user_information">
                  <div>
                    email <span>:</span>{" "}
                  </div>
                  <div>Rahul</div>
                </div>
              </div>
            </div>
            <div className="col-two"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
