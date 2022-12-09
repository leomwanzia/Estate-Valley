import React from "react"; 
import { price } from "../../data/Data";

const PriceCard = () => {
    return (
        <>
           <div className="content flex mtop">
                {price.map((item, index) => {
                    return (

                        <div className="box shadow" key={index}>
                            <div className="topbtn">
                                <button className="btn3">{item.best}</button>
                            </div>
                        </div>
                    )
                })}
           </div>
        </>
}