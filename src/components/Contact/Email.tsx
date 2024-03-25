import React, { useState, useEffect, useRef } from 'react';

const VerticalEmail = () => {
    const email = 'findthelorax@gmail.com';
    const [displayEmail, setDisplayEmail] = useState(''.padStart(email.length, ' '));

    const spinLetter = (index: number) => {
        let i = Math.floor(Math.random() * 26); // Start at a random position
        const intervalId = setInterval(() => {
            if (String.fromCharCode(97 + i) === email[index]) {
                clearInterval(intervalId);
                setDisplayEmail(prev => prev.slice(0, index) + email[index] + prev.slice(index + 1));
            } else {
                setDisplayEmail(prev => prev.slice(0, index) + String.fromCharCode(97 + i) + prev.slice(index + 1));
                i = Math.floor(Math.random() * 26); // Move to a random position
            }
        }, 100);

        // After 5 seconds, if the letter hasn't been found, set it to the correct one
        const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            setDisplayEmail(prev => prev.slice(0, index) + email[index] + prev.slice(index + 1));
        }, 5000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    };

    useEffect(() => {
        email.split('').forEach((char, index) => {
            if (char === '@' || char === '.') {
                setDisplayEmail(prev => prev.slice(0, index) + char + prev.slice(index + 1));
            } else {
                spinLetter(index);
            }
        });
    }, []);

    return (
        <div className="contact-info">
            <div className="contact-vertical-line"></div>
            <div className="email">{displayEmail}</div>
        </div>
    );
};

export default VerticalEmail;