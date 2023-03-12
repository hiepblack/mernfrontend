
import React from 'react'
import "./scrollUp.css"
import { Link } from 'react-router-dom'
const ScrollUp = () => {
    window.addEventListener('scroll',function(){
        const scrollUp = document.querySelector(".scrollup")
        if(this.scrollY >= 560){
            scrollUp.classList.add("show-scroll")
        }else{
            scrollUp.classList.remove("show-scroll")
        }
    })
  return (
    <Link href="#" className="scrollup" >
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </Link>
  )
}

export default ScrollUp