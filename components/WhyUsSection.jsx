import React from 'react'
import './WhyUsSection.css'

const WhyUsSection = () => {
    return (
        <>
            <div className="why-us-section">
                <div className="why-us-info">
                    <div className="why-us-pre-title">WHY GLOBAL AUTO EXPERTS</div>
                    <div className="why-us-title">Let your audience <br /> about your brand.</div>
                    <div className="why-us-text">Hub IT allows your business and technology <br /> computers to store, transmit and analyze.</div>
                </div>


                <div className="our-progress">
                    <div className="progress">
                        <div className="progress-title">DIGITAL SOLUTIONS - 7 YEARS</div>
                        <div className="progress-bar">
                            <div className="digital-solutions progression" style={{width:'80%'}}></div>
                        </div>
                    </div>

                    <div className="progress">
                        <div className="progress-title">SALES SERVICES</div>
                        <div className="progress-bar">
                            <div className="sales-services progression" style={{width:'60%'}}></div>
                        </div>
                    </div>

                    <div className="progress">
                        <div className="progress-title">ANDROID APPLICATIONS</div>
                        <div className="progress-bar">
                            <div className="sales-services progression" style={{width:'68%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUsSection
