import React from "react";
import Heading from "../../head/Heading"
import "./rent.css"

const Rent = () => {
    return (
        <>
            <section className="rent">
                <div className="container">
                <Heading title='Move to What Moves You' subtitle='Let us Guide you Home' />
                    <form className="flex">
                        <div className="box">
                            <span>City/Town</span>
                            <input type="text" placeholder="Location" />
                        </div>

                        <div className="box">
                            <span>Price of Properties</span>
                            <input type="text" placeholder="Price Range" />
                        </div>

                        <div className="box">
                            <span>Property Type</span>
                            <input type="text" placeholder="Property Type" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Rent;