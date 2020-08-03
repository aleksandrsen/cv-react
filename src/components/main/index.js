import React from "react";

const MainInfo = (props) => {
    return (
        <div>
            <aside className="main-info">
                <img className="profile-img" alt="" />
                <h2 className="main-title">
                    Oleksandr <span className="surname">Oksen</span>
                </h2>
                <h3 className="main-sub-title">Front-end developer</h3>
                <div className="aside-item">
                    <div className="aside-item-header">
                        <div className="icon icon-left">
                            <i className="fas fa-user" />
                        </div>
                        <div className="item-title">
                            <span className="title">Profile</span>
                            <span className="round" />
                            <span className="round" />
                            <span className="round" />
                        </div>
                    </div>
                    <p className="aside-item-content about-me">
                        Date of birth - 30.06.1993.
                        <br />
                        I'm inspired by studying and working in web development. I like implementing modern design to
                        the web with new technologies. I like application development using JavaScript and React.
                    </p>
                </div>
                <div className="aside-item">
                    <div className="aside-item-header">
                        <div className="icon-left">
                            <i className="fas fa-phone-volume" />
                        </div>
                        <div className="item-title">
                            <span className="title">Contact</span>
                            <span className="round" />
                            <span className="round" />
                            <span className="round" />
                        </div>
                    </div>
                    <div className="aside-item-content">
                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <i className="fas fa-phone" />
                            </div>
                            +38-095-58-31-872
                        </div>
                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <span className="symbol">@</span>
                            </div>
                            aleksandr7en@gmail.com
                        </div>
                    </div>
                </div>
                <div className="aside-item">
                    <div className="aside-item-header">
                        <div className="icon icon-left">
                            <i className="fas fa-users" />
                        </div>
                        <div className="item-title">
                            <span className="title">Social</span>
                            <span className="round" />
                            <span className="round" />
                            <span className="round" />
                        </div>
                    </div>
                    <div className="aside-item-content">
                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <i className="fab fa-linkedin-in" />
                            </div>
                            <a href="https:www.linkedin.com/in/aleksandr-oksen/">linkedin.com/in/aleksandr-oksen</a>
                        </div>
                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <i className="fab fa-github" />
                            </div>
                            <a href="https:github.com/aleksandrsen">github.com/aleksandrsen</a>
                        </div>
                        <div className="contact-item">
                            <div className="contact-item-icon">
                                <i className="fab fa-facebook-f" />
                            </div>
                            <a href="https:www.facebook.com/profile.php?id=100038337973983">
                                facebook.com/aleksandr-oksen...
                            </a>
                        </div>
                    </div>
                </div>
                <button className="send-email-btn btn btn-primary btn-lg">Send email</button>
            </aside>
        </div>
    );
};

export default MainInfo;
