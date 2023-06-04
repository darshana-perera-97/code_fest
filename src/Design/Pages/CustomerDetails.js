import React from "react";
import user from "../Assets/Icons/person2.png";

export default function CustomerDetails() {
  return (
    <div className="customerDetails">
      <h4>Customer Details</h4>
      <div className="leadDetails d=flex">
        <img src={user} />
        <div className="details">
          <h3>Shamina Mohamed</h3>
          <h4>Senior Software Engineer</h4>
          <hr />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
