import React from "react";
import building from "../image/building.png";
import checklist from "../image/checklist.png";
import massage from "../image/massage.png";
import reading from "../image/reading.png";
import warming from "../image/warming.png";
import watch from "../image/watch.png";

export const Feature = (card, index) => {
    const cardInfo = [
        {
            image: warming,
            text: "More than 1000 language combinations so you can learn from your native language",
        },
        {
            image: reading,
            text: "50 topics to prepare you for the most common situations",
        },
        {
            image: building,
            text: "36 vocabulary builders to install words fast for constant improvement",
        },
        {
            image: massage,
            text: "41 real conversations to give you fluency in learning languages",
        },
        {
            image: checklist,
            text: "Grammar features & conjugation tables to shortcut your progress",
        },
        {
            image: watch,
            text: "Quick Daily Lessons for constant improvement",
        },
    ];
    return (
        <div className="feature">
            <h1>
                <span>Changing </span> the way people <br /> learn new languages
            </h1>
            <div className="feat">
                {cardInfo?.map((item, i) => (
                    <div key={i} className="feat-on">
                        <img alt="img" src={item.image} />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
