import React from "react";
import IconSet from "../Components/IconSet";
import UserProfile from "../Components/UserProfile";

export default function TopBar() {
  return (
    <div className="topBar">
      <IconSet />
      <UserProfile />
    </div>
  );
}
