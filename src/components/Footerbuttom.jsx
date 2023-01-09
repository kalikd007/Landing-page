import React from "react";

export const Footerbuttom = () => {
  const footer = [
    {
      title: "Dialect",
      list: ["About us", "Careers", "Dialect Blog", "Press"],
    },
    {
      title: "Learn More",
      list: [
        "Learn English",
        "Learn French",
        "Learn Spanish",
        "Learn German",
        "Learn Russian",
        "Learn Italian",
        "Learn Portuguese",
        "Learn Turkish",
        "Learn Chinese",
        "Learn Arabic",
        "Learn Japanese",
      ],
    },
    {
      title: "Products",
      list: [
        "Dialect",
        "Dialect for Busninesses",
        "Dialect Kids",
        "Dialect VR",
        "Dialect AR",
      ],
    },
    {
      title: "Support",
      list: ["Contact", "Privacy", "Terms", "Affiliate Program"],
    },
  ];

  return (
    <div className="footer-but">
      {footer?.map((item, i) => (
        <div key={i}>
          <h4>{item.title}</h4>
          {item.list.map((l) => (
            <ul key={i}>{l}</ul>
          ))}
        </div>
      ))}
    </div>
  );
};
