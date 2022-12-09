import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import images from "../../../images/logo.png"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>have any questions ?</h1>
              <p>Your Gateway to a richer life where your dreams come home.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src={images} alt='' />
              <h2>if you need any assistance email us</h2>
              <p>Receive updates, savings tips, new properties as updates straight to your email every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2022 Sherlock Homes. Designd By Leo Mwanzia.</span>
      </div>
    </>
  )
}

export default Footer