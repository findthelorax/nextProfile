import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { PiSunHorizonDuotone, PiMoonStarsDuotone } from "react-icons/pi";

export default function Navbar() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="sticky top-0 z-50 backdrop-blur-sm p-4">
            <nav className="flex items-center justify-between p-4 w-3/4 mx-auto navbar">
                <div>
                    <a href="/">
                        <img src="/path-to-your-logo.png" alt="Logo" className="h-8" />
                    </a>
                </div>
                <div className="space-x-4">
                    <a href="/">HOME</a>
                    <a href="/profile">PROJECTS</a>
                    <a href="/about">ABOUT</a>
                    <a href="/contact">CONTACT</a>
                    <button className="align-middle text-2xl" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                        {resolvedTheme === 'dark' ? <PiSunHorizonDuotone color="#FDB813" /> : <PiMoonStarsDuotone color="#4A4A68" />}
                    </button>
                </div>
            </nav>
        </div>
    );
}