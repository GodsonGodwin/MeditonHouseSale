import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon'/>
                <FaTwitter className='icon'/>
            </div>

            <div className='container'>
                <div className='col'>
                    <h3>About</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                </div>

                <div className='col'>
                    <h3>News Letter</h3>
                    <p>Emails</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Security</p>
                </div>

                <div className='col'>
                    <h3>Pricing</h3>
                    <p>Categories</p>
                    <p>Top Rated</p>
                    <p>Middle Level</p>
                    <p>Available</p>
                </div>

                <div className='col'>
                    <h3>Work</h3>
                    <p>Hire</p>
                    <p>Freelancer</p>
                    <p>Remote</p>
                    <p>Contract</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer