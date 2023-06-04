import React from "react";
import TopBar from "./TopBar";
import Dashboard from "../Pages/Dashboard";

export default function MainDashboardView() {
  return (
    <div className="page">
      <TopBar />
      <Dashboard />
    </div>
  );
}
