import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { PiSunHorizonDuotone, PiMoonStarsDuotone, PiRainbowDuotone } from "react-icons/pi";

export default function Navbar() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="sticky top-0 z-50 nav-container">
            <nav className="flex items-center justify-center p-4 mx-auto navbar">
                <div className="space-x-4">
                    <a href="/">HOME</a>
                    <a href="/#projects">PROJECTS</a>
                    <a href="/about">ABOUT</a>
                    <a href="/#contact">CONTACT</a>
                    <button className="align-middle text-2xl" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                        {resolvedTheme === 'dark' ? <PiSunHorizonDuotone color="#FDB813" /> : <PiMoonStarsDuotone color="#4A4A68" />}
                    </button>
                </div>
            </nav>
        </div>
    );
}