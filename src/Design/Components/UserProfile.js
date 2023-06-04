import React from "react";
import person from "../Assets/Icons/person.png";

export default function UserProfile() {
  return (
    <div className="userProfile d-flex">
      <img src={person} className="person" />
      <div>
        <h5>Person Name</h5>
        <p>Person Name</p>
      </div>
    </div>
  );
}
