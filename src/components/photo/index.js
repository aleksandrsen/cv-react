import React from "react";
import "./index..scss";
import photo from "../../img/profile-picture.jpg";

const Photo = (props) => {
    return (
        <div className="main">
            <img src={photo} alt="profile img" />
            <h2 className="main-title"> Oleksandr Oksen </h2>
            <h3 className="main-sub-title">Front-end developer</h3>
        </div>
    );
};

export default Photo;
