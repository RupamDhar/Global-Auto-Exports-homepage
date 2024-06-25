import React from 'react'
import './LandingHubSection.css'

const LandingHubSection = () => {
    return (
        <>
            <div className="landing-hub-section">
                <div className="landing-hub">
                    <div className="hub-content-section">
                        <div className="hub-pre-title">LANDING HUB PRO</div>
                        <div className="hub-title"> Personal data protection <br /> for tech businesses.</div>
                        <div className="hub-text">
                            Hub IT allows your business and technology computers to store, <br /> transmit, analyze, and manipulate big data.
                        </div>
                        <div className="hub-service">
                            <i className="fa-regular fa-circle-check fa-2x" style={{ color: '#3ead3c', marginRight: '15px' }}></i>
                            Business Consultation
                        </div>
                        <div className="hub-service">
                            <i className="fa-regular fa-circle-check fa-2x" style={{ color: '#3ead3c', marginRight: '15px' }}></i>
                            Corporate Financial Advisory
                        </div>
                        <button className="explore-hub-btn primary-btn">
                            EXPLORE HUB
                            <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                        </button>
                    </div>

                    <div className="hub-image-section">
                        <img src="landing-hub-image-1.jpg" alt="" className="landing-hub-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingHubSection
