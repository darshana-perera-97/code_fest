import React from "react";
import CallIcon from "@mui/icons-material/Call";
import GroupIcon from "@mui/icons-material/Group";
import VideocamIcon from "@mui/icons-material/Videocam";

export default function SingleData(prop) {
  return (
    <div className="singleData">
      <p className="title">{prop.title}</p>
      <div className="content" style={{ background: prop.clr }}>
        {prop.icon === "users" && (
          <GroupIcon className="icon" style={{ color: prop.clr }} />
        )}
        {prop.icon === "call" && (
          <CallIcon className="icon" style={{ color: prop.clr }} />
        )}
        {prop.icon === "video" && (
          <VideocamIcon className="icon" style={{ color: prop.clr }} />
        )}
        <div>
          <h5>{prop.num}</h5>
          <p>Last Week : {prop.lastWeek}</p>
        </div>
      </div>
    </div>
  );
}
