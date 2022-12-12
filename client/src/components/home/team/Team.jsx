import React from "react";
import { team } from "../../data/Data";
import Heading from "../../head/Heading";
import images from "../../../images/agent.png"
import "./team.css"

const Team = () => {
    return (
        <>
            <section className="team background">
                <div className="container">
                    <Heading title="A list of our highly sought after Agents" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>

                    <div className="content mtop grid3">
                        {team.map((val, index) => {
                            return (
                                <div className="box" key={index}>
                                    <button className="btn3">{val.list} Listings</button>
                                    <div className="details">
                                            <div className="img">
                                                <img src={images} alt=''/>
                                                <i className="fa fa-circle-check"></i>
                                            </div>

                                            <i className="fa fa-location-dot"></i>
                                            <label htmlFor="">{val.address}</label>
                                            <h4>{val.name}</h4>


                                        <ul>
                                                {val.icon.map((icon, index) => (
                                                <li key={index}>{icon}</li>
                                                ))}
                                        </ul>
                                          <div className='button flex'>
                                                <button>
                                                    <i className='fa fa-envelope'></i>
                                                    Message
                                                </button>
                                                <button className='btn4'>
                                                    <i className='fa fa-phone-alt'></i>
                                                </button>
                                          </div>
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

export default Team