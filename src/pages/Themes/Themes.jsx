import React, { useState, useEffect } from "react";
import "./themes.css";
import Theme from "../../../components/Theme/Theme";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
const Themes = () => {
  const [themes, setThemes] = useState([]);
  const userJwtToken = localStorage.getItem("linkTreeToken");
  useEffect(() => {
    axios
      .post("http://localhost:3001/themes/get", { jwt: userJwtToken })
      .then((response) => {
        setThemes(response.data.userThemes.themes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userJwtToken]);

  return (
    <>
      <DashboardHeader />
      <div className="themesContainer">
        {themes.map((theme) => {
          return <Theme styles={theme} key={uuidv4()} />;
        })}
      </div>
    </>
  );
};

export default Themes;
