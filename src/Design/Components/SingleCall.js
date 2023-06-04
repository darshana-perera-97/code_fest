import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import caller from "../Assets/Icons/person.png";

export default function SingleCall() {
  return (
    <div className="singleCall">
      <div className="d-flex">
        <img src={caller} />
        <div>
          <h3>Jhone Doe</h3>
          <p>See More</p>
        </div>
      </div>
      <CheckIcon className="icon" />
    </div>
  );
}
