import React from 'react'
import './ServiceSection.css'

const ServiceSection = () => {
    return (
        <>
            <div className="service-section">
                <div className="service-card auto-service">
                    <div className="image-container">
                        <img src="card-image-1.jpg" alt="" className="card-image" />
                    </div>
                    <div className="text-section">
                        <h2 className="text-section-title">Auto Services</h2>
                        <p className="text-section-content">Highly flexible, adaptable, and scalable projects for your startups.</p>
                    </div>
                    <button className="card-enroll-btn">
                        ENQUIRE NOW <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                    </button>
                </div>

                <div className="service-card car-spa">
                    <div className="image-container">
                        <img src="card-image-2.jpg" alt="" className="card-image" />
                    </div>
                    <div className="text-section">
                        <h2 className="text-section-title">Car Spa</h2>
                        <p className="text-section-content">Highly flexible, adaptable, and scalable projects for your startups.</p>
                    </div>
                    <button className="card-enroll-btn">
                        ENQUIRE NOW <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                    </button>
                </div>

                <div className="service-card roadside-assistance">
                    <div className="image-container">
                        <img src="card-image-3.jpg" alt="" className="card-image" />
                    </div>
                    <div className="text-section">
                        <h2 className="text-section-title">24/7 Roadside Assistance</h2>
                        <p className="text-section-content">Highly flexible, adaptable, and scalable projects for your startups.</p>
                    </div>
                    <button className="card-enroll-btn">
                        ENQUIRE NOW <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ServiceSection
