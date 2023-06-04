import React from "react";
import dashboard from "../Assets/Icons/dashboard.png";
import files from "../Assets/Icons/files.png";
import notifications from "../Assets/Icons/notifications.png";
import tasks from "../Assets/Icons/tasks.png";

export default function IconSet() {
  return (
    <div>
      <img src={notifications} className="singleIcon" />
      <img src={dashboard} className="singleIcon" />
      <img src={tasks} className="singleIcon" />
      <img src={files} className="singleIcon" />
    </div>
  );
}
