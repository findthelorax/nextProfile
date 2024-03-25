import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialCircles = () => {
    return (
        <div className="social-icons">
            {['facebook', 'twitter', 'instagram'].map((icon, index) => (
                <div key={index} className="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                        <path d="M50,10 Q60,20 70,10 T90,10 Q80,20 70,30 T50,30 Q40,20 30,10 T10,10 Q20,20 30,30 T50,30 Q60,20 70,10 T90,10" fill="transparent" stroke="black" stroke-width="1"/>
                        <foreignObject x="20" y="20" width="60" height="60">
                            {icon === 'facebook' && <FaFacebook />}
                            {icon === 'twitter' && <FaTwitter />}
                            {icon === 'instagram' && <FaInstagram />}
                        </foreignObject>
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default SocialCircles;