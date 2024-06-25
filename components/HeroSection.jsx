import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <img src="placeholder-image.jpg" className='hero-image' alt="" />
            <div className="hero-section-info">
                <h1 className='hero-section-title'>
                    "Assistance When <br />
                    You Need It Most."
                </h1>

                <div className='hero-section-text'>
                    Hub IT allows your business and technology <br />
                    computers to store, transmit and analyze.
                </div>

                <div className="hero-section-interact">
                    <button className="explore-btn primary-btn">
                        EXPLORE NOW
                        <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                    </button>
                    <span className='hotline-no'>
                        <span style={{ color: 'grey' }}>Hotline:</span> (733) 860-2906
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
