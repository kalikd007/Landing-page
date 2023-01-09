import React from "react";
import Illustration from "../image/Illustration.png";

export const Second = () => {
  return (
    <div className="second">
      <div className="second-content">
        <h1>
          Boost your learning with
          <br /> <span> Dialect</span> plus
        </h1>
        <p>
          Learning with us is fun, and research shows that it works! Learning a
          language on Dialect is completely free, but you can remove ads and
          make faster progress with Plus. Try it free for 14 days!
        </p>
        <button>Start Learning</button>
      </div>
      <div className="second-img">
        <img src={Illustration} alt="" />
      </div>
    </div>
  );
};
