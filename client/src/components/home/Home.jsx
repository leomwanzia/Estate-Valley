import React from "react";
import Featured from "./featured/Featured";
import Recent from "./recent/Recent";
import Rent from"./rent/Rent";
import Location from "./location/Location"
import Team from "./team/Team";
import Price from "./price/Price";

const Home = () => {
    return (
        <>
            <Rent />
            <Featured />
            <Recent />
            <Location />
            <Team />
            <Price />
        </>
    )
}

export default Home