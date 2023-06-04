import React from "react";
import SingleTask from "../Components/SingleTask";

export default function UpcommingTasks() {
  return (
    <div className="upcomingTasks">
      <h4>Today upcomming tasks</h4>
      <div className="content">
        <SingleTask
          task="meeting"
          text="Demo meeting with Jhnone Doe"
          time="02.30 PM"
        />
        <hr />
        <SingleTask
          task="call"
          text="Followup Call with Siman Clay"
          time="03.15 PM"
        />
        <hr />
        <SingleTask
          task="call"
          text="Followup call with Ammilia Neva"
          time="04.20 PM"
        />
        {/* <hr /> */}
      </div>
    </div>
  );
}
