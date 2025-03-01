import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className='f-wrapper'>
        
        <div className='paddings innerWidth flexCenter f-container'>
        <div className='flexColStart f-left'>
            <img src="./logo2.png" width={120} />
       
        <span className='secondaryText'>
            Our Vision is to make all people<br/>
            the best place to live for them.
        </span>
        </div>
        <div className="flexColStart f-right">
            <span className='primaryText'>Information</span>
            <span className='secondaryText'>145 New York, FL 4571, USA</span>
            <div className='flexCenter f-menu'>
                <span className='secondaryText'>Property</span>
                <span className='secondaryText'>Service</span>
                <span className='secondaryText'>Product</span>
                <span className='secondaryText'>About Us</span>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Footer