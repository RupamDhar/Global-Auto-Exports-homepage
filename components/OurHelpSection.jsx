import React from 'react'
import './OurHelpSection.css'

const OurHelpSection = () => {
    return (
        <>
            <div className="our-help-section">
                <img src="placeholder-image-1.jpg" alt="" className="our-help-image" />

                <div className="our-help-content">
                    <div className="our-help-title">We help people to build and<br />expand their services.</div>
                    <div className="our-help-text">Hub IT allows your business and technology computers to store,<br />transmit and analyze.</div>
                    <button className="explore-hub-btn primary-btn">
                        EXPLORE HUB
                        <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default OurHelpSection
