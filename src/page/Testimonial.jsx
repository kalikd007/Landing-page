import React from "react";
import { Cards } from "../components/Cards";
import avatarOne from "../image/avatarOne.png"
import avatarTwo from "../image/avatarTwo.png"
import avatarThree from "../image/avatarThree.png"

export const TestBottom = () => {
    // const image= [avatarOne, avatarTwo, avatarThree]
    return (
        <div className="term">
            <div className="bottom-top">
                <h1>
                    People love <span>Dialect</span>{" "}
                </h1>
                <p>
                    Learning with us is fun, and research shows that it works! Learning a<br /> language on Dialect is completely free.
                </p>
            </div>
            <div className="card">
                <Cards  icon={avatarOne}/>
                <Cards  icon={avatarTwo} />
                <Cards  icon={avatarThree}/>
            </div>
        </div>
    );
};
