import React from "react";
import SingleData from "../Components/SingleData";

export default function DataSheets() {
  return (
    <div className="dataSheets">
      <SingleData
        title="Total leads"
        num="156"
        icon="users"
        lastWeek="124"
        clr="#ff0090"
      />
      <SingleData
        title="Your calls today"
        num="24"
        icon="call"
        lastWeek="16"
        clr="#00c0ff"
      />
      <SingleData
        title="your meetings today"
        num="04"
        icon="video"
        lastWeek="07"
        clr="#3eff8b"
      />
    </div>
  );
}
