import React from "react";
import SingleCall from "../Components/SingleCall";

export default function LastCalls() {
  return (
    <div className="lastCalls">
      <h4>Today upcomming tasks</h4>
      <div className="content">
        <SingleCall />
        <SingleCall />
        <SingleCall />
      </div>
    </div>
  );
}
