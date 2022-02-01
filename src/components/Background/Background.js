import React from "react";
import BackgroundCSS from "./Background.module.css"
import Oval from "../Oval/Oval";

const Background = () => {
    return(
        <div className={"Background"}>
            <Oval/>
            <div className={BackgroundCSS.BG}/>
        </div>
    );
};

export default Background;