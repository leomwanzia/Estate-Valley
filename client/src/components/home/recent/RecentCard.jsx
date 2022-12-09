import React from "react";
import { list } from "../../data/Data";
import images from "../../../images/h1.png"
const RecentCard = () => {
    return (
        <>
            <div className="content grid3 top">
                {list.map((val, index) => {
                    const { category,location,name,price,type} = val;
                    return (
                        <div className="box shadow" key={index}>
                            <div className="img">
                                <img src={images} alt="" />
                            </div>

                            <div className="text">
                                <div className="category flex">
                                    <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                                    <i className='fa fa-heart'></i>
                                    <h4>{name}</h4>
                                        <p>
                                            <i className='fa fa-location-dot'></i> {location}
                                        </p>
                                </div>
                                <div className='button flex'>
                                        <div>
                                            <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                                        </div>
                                        <span>{type}</span>
                                    </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RecentCard;

