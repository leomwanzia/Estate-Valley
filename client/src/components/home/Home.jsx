import React from "react";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Rent from"./rent/Rent";
import Location from "./location/Location"
import Team from "./team/Team";

const Home = () => {
    return (
        <>
            <Rent />
            <Featured />
            <Recent />
            <Location />
            <Team />
        </>
    )
}

export default Home