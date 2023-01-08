import React from "react";
import Union from "../image/Union.png";
import Unions from "../image/Unions.png";
// import Emoji from "../image/Emoji.png";
// import Illustrations from "../image/Illustrations.png";

export const TextContent = () => {
    return (
        <>
            <div className="textContent">
                {/* <img src={Illustrations} alt="" width="144px" height="144px" /> */}
                <div className="container">
                    <div className="con-top">
                        <h1 style={{ display: "flex", justifyContent: "center", margin: "auto" }}>Dialect brings</h1>
                        <div className="con-top-do">
                            <h1 className="lang">language</h1>
                            <h1>learning</h1>
                        </div>
                    </div>
                    <p>
                        Learn a language right here with hundreds of free language-learning lessons. Get access to compact lessons from the
                        experts and connect with a community of native speakers to help you master words faster.
                    </p>
                </div>
                <div className="con-btn">
                    <img src={Unions} alt="" />
                    <div className="con-btn-gro">
                        <select name="" id="">
                            <option value="">Spanish</option>
                        </select>
                        <button>Start Learning</button>
                    </div>

                    <img src={Union} alt="" />
                </div>
                {/* <img src={Emoji} alt="" width="140px" height="180px" className="emoji" /> */}
            </div>
        </>
    );
};
