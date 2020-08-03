import React from "react";
import "./index.css";

const InfoItemWrapper = ({ title, icon, children }) => (
    <div className="infoItemWrapper">
        <h3>
            {icon}
            {title}
        </h3>
        {children}
    </div>
);

export default InfoItemWrapper;
