import React from "react";
import TopBar from "./TopBar";
import Dashboard from "../Pages/Dashboard";
import CustomerDetails from "../Pages/CustomerDetails";

export default function MainDashboardView() {
  return (
    <div className="page">
      <TopBar />
      <Dashboard />
      <CustomerDetails />
    </div>
  );
}
