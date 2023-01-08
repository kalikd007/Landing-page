import React from "react";
import { Navbar } from "../components/Navbar";
import { TextContent } from "../components/TextContent";

export const Hero = () => {
    return (
        <div className="hero">
            <Navbar />
            <TextContent />
        </div>
    );
};
