import React from "react";
import "./socialmedia.css";
import "../../public/styles.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Sociamedia = ({ socialData, colors }) => {
  return (
    <>
      <div className="socialmediaContainer">
        <div className="svgs">
          {Object.keys(socialData).map((social, i) => {
            const url = Object.values(socialData)[i];

            if (i < social.length) {
              return (
                <Link to={`http://${url}`} key={uuidv4()} target="_blank">
                  <img src={`../images/svg/${social}.svg`} />
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Sociamedia;
