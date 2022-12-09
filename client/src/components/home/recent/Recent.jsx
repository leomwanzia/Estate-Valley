import React from "react";
import Heading from "../../head/Heading";
import RecentCard from "./RecentCard";
import "./Recent.css";

const Recent = () => {
    return (
        <>
            <section className="recent padding">
                <div className="container">
                    <Heading title="Recently Listed Properties" subtitle="Find the best property of your desire around your city and town." />
                    <RecentCard/>
                </div>
            </section>
        </>
    )
}

export default Recent;