import React from "react";
import Heading from "../../head/Heading";
import "./featured.css"
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
    return (
         <>
            <section className="featured background">
                <div className="container">
                    <Heading title='Featured Property Types' subtitle='Find the Property you need.' />
                    <FeaturedCard/>
                </div>
            </section>
         </>
    )   
}

export default Featured