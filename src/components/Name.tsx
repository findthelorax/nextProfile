import React, { useState, useEffect } from 'react';
import Plx from 'react-plx';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const parallaxDataBrett = [
    {
        start: 0,
        end: 500,
        properties: [
            {
                startValue: -250,
                endValue: 175,
                property: 'translateX',
            },
        ],
    },
];

const parallaxDataFerrante = [
    {
        start: 0,
        end: 300,
        properties: [
            {
                startValue: 100,
                endValue: -175,
                property: 'translateX',
            },
        ],
    },
];

const parallaxDataStackDeveloper = [
    {
        start: 0,
        end: 500,
        properties: [
            {
                startValue: -200,
                endValue: -400,
                property: 'translateY',
            },
            {
                startValue: 0,
                endValue: 50,
                property: 'translateX',
            },
        ],
    },
];

const Name = () => {
    const [loadAnimation, setLoadAnimation] = useState(false);
    const [ferranteInView, setFerranteInView] = useState(true);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0,
        rootMargin: '200px 0px',
    });

    useEffect(() => {
        setFerranteInView(inView);
    }, [inView]);

    const propsBrett = useSpring({ transform: loadAnimation ? 'translateX(0px)' : 'translateX(-200px)', from: { transform: 'translateX(-200px)' }, config: { tension: 25, friction: 5 } });
    const propsFerrante = useSpring({
        transform: ferranteInView 
            ? 'translateX(0px) rotate(0deg' 
            : 'translateX(0px) rotate(-90deg)',
        from: { transform: 'translateX(200px)' },
        config: { tension: 15, friction: 5 }
    });
    const propsStackDeveloper = useSpring({ transform: loadAnimation ? 'translateY(0px) translateX(50px)' : 'translateY(-300px) translateX(50px)', from: { transform: 'translateY(-300px) translateX(50px)' }, config: { tension: 20, friction: 5 } });

    useEffect(() => {
        setLoadAnimation(true);
    }, []);

    return (
        <div className="name-container p-4 flex flex-col items-end justify-center mx-auto h-[95vh] mt-4">
            <Plx parallaxData={parallaxDataBrett}>
                <animated.h1 style={propsBrett} className="text-8xl">BRETT</animated.h1>
            </Plx>
            <Plx parallaxData={parallaxDataFerrante}>
                <animated.h1 ref={ref} style={propsFerrante} className="text-8xl ferrante">FERRANTE</animated.h1>
            </Plx>
            <Plx parallaxData={parallaxDataStackDeveloper}>
                <animated.h2 style={propsStackDeveloper}>FULL STACK</animated.h2>
            </Plx>
            <Plx parallaxData={parallaxDataStackDeveloper}>
                <animated.h2 style={propsStackDeveloper}>DEVELOPER</animated.h2>
            </Plx>
        </div>
    );
};

export default Name;