import React from "react";
import "./socialmedia.css";
import "../../public/styles.css";
import { Link } from "react-router-dom";
const Sociamedia = ({ socialData }) => {
  return (
    <>
      <div className="socialmediaContainer">
        {Object.keys(socialData).map((social, i) => {
          const url = Object.values(socialData)[i];

          if (i < social.length) {
            return (
              <Link to={`http://${url}`} key={i} target="_blank">
                <img src={`../images/svg/${social}.svg`} />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export default Sociamedia;
