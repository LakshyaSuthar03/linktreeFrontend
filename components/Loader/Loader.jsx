import React from "react";
import "./Loader.css";
import loader from "../../public/loader/loader.gif";
const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="Loading..." className="loader" />
    </div>
  );
};

export default Loader;
