import axios from "axios";
import { useEffect } from "react";
import axiosInstance from "../axiosInstance";

export const Dashboard = () => {
  const accessToken = localStorage.getItem("accessToken");
  // using useEffect to access the protected endpoint on certain page where you want to access some protected data from the backend, in our case it's the stock prediction
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get("/protected-view");
        console.log("success", response.status, response);
      } catch (err) {
        console.log("error fetching data", err);
      }
    };
    fetchProtectedData();
  }, []);
  return <div className="text-light container">Dashboard</div>;
};
