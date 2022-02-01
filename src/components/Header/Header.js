import Background from "../Background/Background";
import React from "react";
import Oval from "../Oval/Oval";
import Nav from "../Nav/Nav";

const Header = () => {
    return(
       <div className={"Header"}>
           <Nav/>
           <Background/>
       </div>
    )
};

export default Header;