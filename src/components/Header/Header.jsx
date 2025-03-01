import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler"


const Header = () => {
  const [menuOpened, setMenuOpenend]=useState(false)
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth<=800){
      return {right:!menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logo.png" alt="logo" width={100} />
            <OutsideClickHandler 
            onOutsideClick={()=>{
              setMenuOpenend(false)
            }}
            >
        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}>
            <a href="#">Residencies</a>
            <a href="#">Our Value</a>
            <a href="#">Contact us</a>
            <a href="#">Get Started</a>
            <button className='button'> <a href="">Contact</a>
            </button>

        </div>
        </OutsideClickHandler>
        <div className='menu-icon' onClick={()=>setMenuOpenend((prev)=>!prev)}>
          <BiMenuAltRight size={20}/>
        </div>
        </div>
        
    </section>
  )
}
export default Header