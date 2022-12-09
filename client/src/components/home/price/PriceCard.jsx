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
                            <h3>{item.plan}</h3>
                            <h1>
                                <span>$</span> {item.price}
                               <p>{item.ptext}</p> 

                               <ul>
                               {item.list.map((val) => {
                                 const { icon, text, change } = val
                                 return (
                                   <li>
                                     <label
                                       style={{
                                         background: change === "color" ? "#dc35451f" : "#27ae601f",
                                         color: change === "color" ? "#dc3848" : "#27ae60",
                                       }}
                                     >
                                       {icon}
                                     </label>
                                     <p>{text}</p>
                                   </li>
                                 )
                               })}
                             </ul>
                            </h1>
                        </div>
                    )
                })}
           </div>
        </>
}