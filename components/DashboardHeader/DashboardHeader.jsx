import React from "react";
import "./dashboardHeader.css";
import "../../public/styles.css";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const DashboardHeader = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const jwtToken = localStorage.getItem("linkTreeToken");
  useEffect(() => {
    if (!jwtToken) {
      navigate("/login");
    }
    axios
      .post("http://localhost:3001/data/dashboard", {
        userJwt: jwtToken,
      })
      .then(function (response) {
        if (response.data.status === "success") {
          setUserData(response.data.userDetails);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleLogout() {
    localStorage.removeItem("linkTreeToken");
    navigate("/login");
  }
  return (
    <>
      <div className="dashboardContainer">
        <div className="containerLeft">
          <Link to={"/edit/links"}>
            <button className="cta">Edit Links</button>
          </Link>
          <Link to={"/edit/profile"}>
            <button className="cta">Edit Profile</button>
          </Link>
        </div>
        <div className="containerRight">
          <div className="porfileCta">
            <div className="redirectLinkTree">
              <Link
                to={`/get/${userData?.handle}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Preview LinkTree
              </Link>
              <Link
                to={`/`}
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  marginLeft: "1rem",
                }}
              >
                Dashboard
              </Link>
            </div>

            <div className="profileInfo">
              <p className="profileTitle">{userData?.name}</p>
            </div>
            <Link to={`/edit/profile`}>
              <div className="avtar">
                <img src={userData?.avatar} />
              </div>
            </Link>
            <div className="logout">
              <BiLogOut onClick={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
