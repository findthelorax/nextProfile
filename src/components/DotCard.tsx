import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DotCard: React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cardRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(
            window.innerWidth / -2, 
            window.innerWidth / 2, 
            window.innerHeight / 2, 
            window.innerHeight / -2, 
            1, 
            1000
        );
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        cardRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(20); // Increase the size of the dots
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Change the color to white

        const dots = new Array(100).fill(null).map(() => {
            const dot = new THREE.Mesh(geometry, material);
            // Randomly position the dots within the scene
            dot.position.x = Math.random() * window.innerWidth - window.innerWidth / 2;
            dot.position.y = Math.random() * window.innerHeight - window.innerHeight / 2;
            scene.add(dot);
            return dot;
        });

        camera.position.z = 1;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        const onMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            dots.forEach(dot => {
                const distance = Math.hypot(dot.position.x - (clientX - window.innerWidth / 2), dot.position.y - (clientY - window.innerHeight / 2));
                if (distance < 150) {
                    dot.position.x += ((clientX - window.innerWidth / 2) - dot.position.x) * 0.01;
                    dot.position.y += ((clientY - window.innerHeight / 2) - dot.position.y) * 0.01;
                    dot.scale.x = dot.scale.y = Math.max(0.1, 1 - distance / 150);
                }
            });
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return <div ref={cardRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default DotCard;