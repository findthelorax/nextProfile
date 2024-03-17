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
            <nav className="flex items-center justify-between p-4 w-1/2 mx-auto">
                <div>
                    <a href="/">
                        <img src="/path-to-your-logo.png" alt="Logo" className="h-8" />
                    </a>
                </div>
                <div className="space-x-4">
                    <a href="/">Home</a>
                    <a href="/profile">Projects</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <button className="align-middle text-2xl" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                        {resolvedTheme === 'dark' ? <PiSunHorizonDuotone color="#FDB813" /> : <PiMoonStarsDuotone color="#4A4A68" />}
                    </button>
                </div>
            </nav>
        </div>
    );
}