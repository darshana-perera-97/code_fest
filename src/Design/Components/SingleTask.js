import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";


export default function SingleTask(prop) {
  return (
    <div className="singleTask">
      <div className="d-flex">
        {prop.task === "meeting" && (
          <VideocamIcon className="icon" style={{ color: "#00ff72" }} />
        )}
        {prop.task === "call" && (
          <CallIcon className="icon" style={{ color: "#00c0ff" }} />
        )}
        <div>
          <h5>{prop.text}</h5>
          <p>Time : {prop.time}</p>
        </div>
      </div>
      {prop.task === "meeting" && (
        <h4 style={{ background: "#00ff72" }}>User Details</h4>
      )}
      {prop.task === "call" && (
        <h4 style={{ background: "#00c0ff" }}>User Details</h4>
      )}
    </div>
  );
}
