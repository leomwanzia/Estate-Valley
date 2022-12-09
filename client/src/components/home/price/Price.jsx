import React from "react";
import Heading from "../../head/Heading";

const Price = () => {
    return (
        <>
            <section className="price padding">
                <div className="container">
                    <Heading title='Select the best price for you' subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At erat pellentesque adipiscing commodo elit at imperdiet. Faucibus ornare suspendisse sed nisi. Est pellentesque elit ullamcorper dignissim."/>

                    <PriceCard />
                </div>
            </section>
        </>
    )
}

export default Price