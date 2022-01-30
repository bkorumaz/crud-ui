import Background from "../Background/Background";
import React from "react";
import Oval from "../Oval/Oval";

const Header = () => {
    return(
       <div className={"Header"}>
           {/*<Nav/>*/}
           <Oval/>
           <Background/>
       </div>
    )
};

export default Header;