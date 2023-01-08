import React from "react";
import dot from "../image/dot.png";

export const Cards = (props) => {
  return (
    <div className="cls">
      <div className="cls-top">
        <div className="card-icon">
          <img src={props.icon} alt="icon" />
        </div>
        <div>
          <h3>Moskur Alam</h3>
          <p>CEO of Web Design</p>
        </div>
      </div>
      <p>
        Dialect is excellent - short and sweet and effective lessons and great
        quick review which is key to remembering. I love it! I'm learning
        Dutch!! I enjoy the dialogues and scenarios, which include helpful
        phrases that can be used in various situations.
      </p>
      <div className="card-dot">
        <img src={dot} alt="" />
      </div>
    </div>
  );
};
