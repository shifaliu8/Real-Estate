import React from 'react'
import './hero.css'
import {HiLocationMarker} from 'react-icons/hi'
const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerwidth flexCenter hero-container'>

          <div className='hero-left'>
           <div className='hero-title'>
            <h1>Discover<br/>more Suitable<br/>Property</h1>
           </div>
           <div className='hero-des'>
            <span> Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor </span>
  
           </div>
           <div className='flexCenter search-bar'>
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type='text'/>
            <button className='button'>Search</button>


           </div>

          </div>
          <div className=' flexCenter hero-right'>
            <div className='image-container'> 
              <img src="./hero-image.png" alt="" />
            </div>
           

          </div>
      </div>
    </section>
  )
}

export default Hero