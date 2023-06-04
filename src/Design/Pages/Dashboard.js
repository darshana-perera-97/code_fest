import React from "react";
import clapClipart from "../Assets/clapClipart@3x.png";
import DataSheets from "../Layouts/DataSheets";
import UpcommingTasks from "../Layouts/UpcommingTasks";
import LastCalls from "../Layouts/LastCalls";

export default function Dashboard() {
  return (
    <div>
      <div className="dashboard d-flex">
        <img className="clapClipart" src={clapClipart} />
        <div>
          <h3>Good Afternoon, Sharmini</h3>
          <p>Welcome back to your dashboard.</p>
        </div>
      </div>
      <DataSheets />
      <div className="d-flex">
        <UpcommingTasks />
        <LastCalls />
      </div>
    </div>
  );
}
