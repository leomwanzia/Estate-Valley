import React from "react";
import images from "../../../../images/about.png"
import image from "../../../../images/family.png"
import Back from "../../../head/Back";
import Heading from "../../../head/Heading";
import "./about.css"

const About = () => {
    return (
        <>
            <section className="about">
                <Back name='About Us' title='More About our Real Estate company...' cover={images}/>
                <div className="container flex mtop">
                    <div className="left row">
                        <Heading title="this is our story" subtitle="Read on how our Company works and the story that begun our Adventure."/>

                        <p>
                        Sherlock Homes is a real estate agency based in Nairobi Kenya, with a large and high quality real estate offer in Nairobi 
                        and Nairobi surroundings.

                        Our company was founded in 2009 and has been operating successfully ever since. For the activity of real estate agency, we have a permission of the Ministry of Economy and are registered in Ministry of Industrialization, Trade and Enterprise Development.
                        </p>

                        <p>
                        Our specialized team, which we employ, will give you all the information you need when buying or selling a property, and will guide you throughout the entire buying process. We employ a lawyer, an architect and licensed real estate agents with passed brokerage examinations, registered with the Ministry of Industrialization, Trade and Enterprise Development. Our team speaks English and Swahili, which is a great advantage in our day-to-day business as we work with clients and other companies from around the country.
                        </p>
                    </div>
                    <div className="right-row">
                        <img src={image} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About