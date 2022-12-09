import React from "react";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Rent from"./rent/Rent";
import Location from "./location/Location"

const Home = () => {
    return (
        <>
            <Rent />
            <Featured />
            <Recent />
            <Location />
        </>
    )
}

export default Home