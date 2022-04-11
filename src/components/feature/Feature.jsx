import React from 'react'
import './feature.css';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'

const Feature = () => {
  return (
    <div className="feature">
        <h1 className='feature-text'>Top Featured Rated Apartment</h1>

        <div className='container'>
            <img className='span-3 image-grid-row-2' src={img1} alt='Featured House'/>
            <img src={img2} alt='Featured House'/>
            <img src={img3} alt='Featured House'/>
            <img src={img4} alt='Featured House'/>
            <img src={img5} alt='Featured House'/>
        </div>

    </div>
  )
}

export default Feature