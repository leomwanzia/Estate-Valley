import React from "react"
import images from "../../images/about.png";


const Back = ({ name, title }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={images} alt='' />
      </div>
    </>
  )
}

export default Back