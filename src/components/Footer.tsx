import React from 'react';
import { useTheme } from 'next-themes';

const Footer: React.FC = () => {
    const { resolvedTheme } = useTheme();
    const year = new Date().getFullYear();

    return (
        <footer className={`${resolvedTheme === 'dark' ? 'dark' : ''} text-center pb-4 footer`}>
            <p>© {year} BRETT FERRANTE</p>
        </footer>
    );
};

export default Footer;