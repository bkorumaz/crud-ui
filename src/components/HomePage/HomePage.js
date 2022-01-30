import Card from "../Card/Card";
import Background from "../Background/Background";
import React from "react";

const HomePage = ({children}) => {
    return(
        <>
            <Background/>
            <Card/>
        </>
    );
};

export default HomePage;