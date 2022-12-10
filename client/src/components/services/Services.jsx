import React from "react";
import Back from "../head/Back";
import images from "../../images/services.png"
import FeaturedCard from "../home/featured/FeaturedCard";

const Services = () => {
    return (
        <>
            <section className="services mb">
                <Back name="Services" title="Offered services" cover={images} />
                <div className="featured container">
                    <FeaturedCard />
                </div>
            </section>
        </>
    )
}

export default Services