import React from "react";
import { featured } from "../../data/Data";
import images from "../../../images/family-house.png" ; 

const FeaturedCard = () => {
    return ( 
        <> 
            <div className="content grid5 mtop">
                {featured.map((items, index) => (
                    <div className="box" key={index}>
                        <img src={images} alt='' />
                        <h4>{items.name}</h4>
                        <label><h4>{items.total}</h4></label>
                    </div>
                ))}
            </div>
        </>
    )   
}

export default FeaturedCard