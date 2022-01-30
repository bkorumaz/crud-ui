import React from "react";
import BackgroundCSS from "./Background.module.css"

const Background = ({children}) => {
    return(
        <div className={BackgroundCSS.BG}/>
    );
};

export default Background;