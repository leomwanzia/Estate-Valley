import React from "react";
import images from "../../images/about.png"
import Back from "../head/Back";

const About = () => {
    return (
        <>
            <section className="about">
                <Back name='About Us' title='More About our Real Estate company' cover={images}/>
            </section>
        </>
    )
}

export default About