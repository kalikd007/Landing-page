import React from "react";
import about from "../image/about.png";

export const About = () => {
    return (
        <div className="about">
            <img src={about} alt="" />
            <div className="about-content">
                <h1>
                    The <span>world's #1</span> way to learn a language
                </h1>
                <p>
                    Learning with us is fun, and research shows that it works! With quick, bite-sized lessons, you’ll earn points and unlock new
                    levels while gaining real-world communication skills.
                </p>
                <p>
                    Learn a language right here with hundreds of free language-learning lessons. Get access to compact lessons from the experts.
                </p>
            </div>
        </div>
    );
};
