import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ChatIcon from "@mui/icons-material/Chat";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";

export default function Navogations() {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="navogations">
      <p className="mainMenuText">Main Menu</p>

      <div className="d-flex singleItemActive">
        <DashboardIcon className="menuIconActive" />
        <p className="menuNameActive">Dashboard</p>
      </div>
      {open ? (
        <div
          className="d-event"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="d-flex singleItem">
            <EmailIcon className="menuIcon" />
            <p className="menuName">Email</p>
          </div>
          <ArrowDropUpIcon className="downIcon" />
        </div>
      ) : (
        <div
          className="d-event"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="d-flex singleItem">
            <EmailIcon className="menuIcon" />
            <p className="menuName">Email</p>
          </div>
          <ArrowDropDownIcon className="downIcon" />
        </div>
      )}

      <div className="d-flex singleItem">
        <ChatIcon className="menuIcon" />
        <p className="menuName">Chat</p>
      </div>
      <div className="d-flex singleItem">
        <ContactEmergencyIcon className="menuIcon" />
        <p className="menuName">Contacts</p>
      </div>
    </div>
  );
}
