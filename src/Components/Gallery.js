import React from 'react'
import "./Gallery.css"

// import image

import img1 from "../assets/image/img1.jpg"
import img2 from "../assets/image/img2.jpg"
import img3 from "../assets/image/img3.jpg"
import img4 from "../assets/image/img4.jpg"
import img5 from "../assets/image/img5.jpg"
import img6 from "../assets/image/img6.jpg"
import img7 from "../assets/image/img7.jpg"
import img8 from "../assets/image/img8.jpg"

const Gallery = () => {
  return (
    <div className='box'>
        <span style={{"--i":1}}><img src={img1} alt="" /></span>
        <span style={{"--i":2}}><img src={img2} alt="" /></span>
        <span style={{"--i":3}}><img src={img3} alt="" /></span>
        <span style={{"--i":4}}><img src={img4} alt="" /></span>
        <span style={{"--i":5}}><img src={img5} alt="" /></span>
        <span style={{"--i":6}}><img src={img6} alt="" /></span>
        <span style={{"--i":7}}><img src={img7} alt="" /></span>
        <span style={{"--i":8}}><img src={img8} alt="" /></span>
    </div>
  )
}

export default Gallery