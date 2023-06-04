import React from "react";
import LeftNavBar from "./Layouts/LeftNavBar";
import MainDashboardView from "./Layouts/MainDashboardView";

export default function Design() {
  return (
    <div className="d-flex">
      <LeftNavBar />
      <MainDashboardView />
    </div>
  );
}
