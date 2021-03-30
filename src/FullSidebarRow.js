import React from "react";
import "./FullSidebarRow.css";

function FullSidebarRow({ Icon, title, selected }) {
  return (
    <div className={`fullSidebarRow ${selected && "selected"}`}>
      <Icon className="fullSidebarRow__icon" />
      <h2 className="fullSidebarRow__title">{title}</h2>
    </div>
  );
}

export default FullSidebarRow;
