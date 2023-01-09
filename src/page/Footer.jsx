import React from "react";
import { Footerbuttom } from "../components/Footerbuttom";

export const Footer = () => {
  const lang = [
    "Română",
    "Français",
    "Español",
    "Deutsch",
    "Русский",
    "Italiano",
    "Français",
    "中文",
    "Čeština",
    "हिन्दी",
  ];

  return (
    <div className="footer">
      <div className="ques">
        <h1>
          Have any <span>questions</span>?
        </h1>
        <p>
          Visit our <b>FAQ page</b> or email us at <b> youremail@gmail.com.</b>
        </p>
      </div>
      <div>
        <Footerbuttom />
      </div>
      <div className="lang">
        <h3>Site language</h3>
        <div className="ul">
          {lang.map((item, i) => (
            <ul key={i}>{item}</ul>
          ))}
        </div>{" "}
        <p style={{ paddingBottom: "20px" }}>Copyright @UIHUT 2022</p>
      </div>
    </div>
  );
};
