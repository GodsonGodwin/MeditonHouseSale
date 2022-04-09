import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <h1>Find the perfect home</h1>
            <p className='searchText'> Search for your dream luxury apartment, micro apartment, duplex and lots more...</p>
            <form className='searchForm'>
                <div>
                    <input type='text' placeholder='Search for dream type of house'/>
                </div>

                <div className='radio'>
                    <input type="radio" checked />
                    <label>Buy</label>

                    <input type="radio"/>
                    <label>Rent</label>

                    <span type='submit'><AiOutlineSearch className='icon'/></span>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Hero