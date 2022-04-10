import React from 'react'
import './showCase.css';
import showCase1 from '../../assets/showCase1.jpg'
import showCase2 from '../../assets/showCase2.jpg'
import showCase3 from '../../assets/showCase3.jpg'

const ShowCase = () => {
  return (
    <div className='showcase'>
        <h1>Find The Best Luxurus Apartmet Around You </h1>
        <div>
            <p><span className='bold'>All</span></p>
            <p>Commercial</p>
            <p>Residential</p>
            <p>Agricultural</p>
        </div>

        <div className='container'>
            <img src={showCase1} alt='showCase Image'/>
            <img src={showCase2} alt='showCase Image'/>
            <img src={showCase3} alt='showCase Image'/>
        </div>

        <button className='btn'> View All</button>

    </div>
  )
}

export default ShowCase