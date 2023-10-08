import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import AnalyticCard from "../../../components/AnalyticCard/AnalyticCard";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const userJwtTocken = localStorage.getItem("linkTreeToken");
  useEffect(() => {
    axios
      .post("http://localhost:3001/analytics/dashboard", {
        userJwt: userJwtTocken,
      })
      .then((response) => {
        setData(response.data.dashboardData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userJwtTocken]);

  return (
    <div>
      <DashboardHeader />
      <div className="analyticCardContainer">
        <div className="analyticCardContainerInner">
          {data.map((stats) => {
            return <AnalyticCard stats={stats} key={Math.random()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
