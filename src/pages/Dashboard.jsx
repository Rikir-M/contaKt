import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ContactTable from "../components/ContactTable";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="px-4 ml-0 md:ml-64">
        <ContactTable />
      </div>
    </div>
  );
};

export default Dashboard;
