import React from "react";
import Back from "../head/Back"
import PriceCard from "../home/price/PriceCard"
import images from "../pricing/pricing.png"

const Pricing = () => { 
    return (

        <>
            <section className="services mb">
                <Back name = 'Pricing' title="Deals made for you, everything you need, on a budget." cover={images} />
                <div className="price container">
                <PriceCard />
                </div>
            </section>
        </>
    )
}

export default Pricing;