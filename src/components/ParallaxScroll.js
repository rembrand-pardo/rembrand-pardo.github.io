import React from 'react';
import '../styles/ParallaxScroll.css';

const ParallaxScroll = ({ images }) => {
    return (
        <div className="parallax-container">
            {images.map((image, index) => (
                <div className="parallax-layer" key={index} style={{ backgroundImage: `url(${image})` }}>
                    <div className="image-overlay" />
                </div>
            ))}
        </div>
    );
};

export default ParallaxScroll;
