import React from "react";
import QRScannerCard from "../components/QRScannerCard";
import StatsCard from "../components/StatsCard";
import UsersTable from "../components/UsersTable";
import Navbar from "../components/NavbarAi";
import { ToastContainer } from "react-toastify";

const Dashboard = ({setLoading}) => {
  return (
    <>
      <Navbar setLoading={setLoading}/>

      <div className="container mt-4">
        <div className="row g-4">
          <div className="col-md-6">
            <QRScannerCard />
          </div>
          <div className="col-md-6">
            <StatsCard />
          </div>
        </div>

        <UsersTable />
      <ToastContainer />

      </div>
    </>
  );
};

export default Dashboard;
