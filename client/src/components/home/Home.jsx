import React from "react";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Rent from"./rent/Rent";

const Home = () => {
    return (
        <>
            <Rent />
            <Featured />
            <Recent />
        </>
    )
}

export default Home