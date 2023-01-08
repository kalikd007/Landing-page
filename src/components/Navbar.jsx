import React from "react";
import Group from "../image/Group.png";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={Group} alt="" width="24px" height="24px" />
                <span>Dialect</span>
            </div>
            <div className="nav-list">
                <ul>
                    <li>How it works</li>
                    <li>Reviews</li>
                    <li>Live Lesson</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="nav-btn">
                <button type="submit" className="login">
                    Log In
                </button>
                <button type="submit " className="sign">
                    Sign Up
                </button>
            </div>
        </div>
    );
};
