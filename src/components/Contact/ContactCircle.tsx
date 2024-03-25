import React from 'react';
import Link from 'next/link';

const ContactMeCircle = () => {
    return (
        <Link href="/#contact" className="circle-container">
            <div className="blue-dot"></div>
            <div className="white-circle"></div>
            <div className="white-circle outer">
                <div className="blur-ring"></div>

                <svg viewBox="0 0 100 100">
                    <path id="circlePath" d="M50,50 m0,-35 a 35,35 0 0,1 0,70 a 35,35 0 0,1 0,-70" />
                    <text className="circle-text">
                        <textPath xlinkHref="#circlePath" startOffset="46%" textAnchor="middle">
                            CLICK TO SEND A MESSAGE
                        </textPath>
                    </text>
                </svg>
            </div>
        </Link>
    );
};

export default ContactMeCircle;