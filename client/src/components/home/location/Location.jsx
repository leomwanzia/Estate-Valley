import React from "react";
import Heading from "../../head/Heading";
import { location } from "../../data/Data";
import "./location.css"
import images from "../../../images/location.png";

const Location = () => {
    return (
        <>
            <section className="location padding">
                <div className="container">
                    <Heading title="Find your desired Location" subtitle="There are a wide range of location you can choose from">
                    </Heading>

                    <div className="content grid3 mtop">
                        {location.map((items, index) => {
                            return (
                                <div className="box" key={index}>
                                    <img src={images} alt="" />
                                    <div className="overlay">
                                        <h5>{items.name}</h5>
                                        <p>
                                            <label>{items.Villas}</label>
                                            <label>{items.Offices}</label>
                                            <label>{items.Apartments}</label>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Location