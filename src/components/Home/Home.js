import React, { useEffect, useState } from "react";
import UserData from "../UserItem/UserData";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const data = await fetch(" https://panorbit.in/api/users.json");
    const json = await data.json();
    console.log(json.users);
    setData(json.users);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="Home">
      <div className="card">
        <div className="card-heading">
          <h1>Select an account</h1>
        </div>
        <div className="container">
          {data.map((item) => {
            return (
              <Link to="/profile" state={item} key={item.id}>
                <UserData {...item} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
