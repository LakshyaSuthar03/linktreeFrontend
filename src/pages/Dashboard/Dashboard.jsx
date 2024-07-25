import React, { useEffect, useState } from "react";
import axios from "axios";
import { base } from "../../../config.json";
import "./dashboard.css";
import DashboardHeader from "../../../components/DashboardHeader/DashboardHeader";
import AnalyticCard from "../../../components/AnalyticCard/AnalyticCard";
import Loader from "../../../components/Loader/Loader";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const userJwtToken = localStorage.getItem("linkTreeToken");

  useEffect(() => {
    axios
      .post(`${base}/analytics/dashboard`, {
        userJwt: userJwtToken,
      })
      .then((response) => {
        setData(response.data.dashboardData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userJwtToken]);

  return (
    <div>
      <DashboardHeader />
      {loading ? <Loader /> : null}
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
