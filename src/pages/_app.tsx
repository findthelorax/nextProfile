import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider attribute="class">
            <ParallaxProvider>
                <Component {...pageProps} />
            </ParallaxProvider>
        </ThemeProvider>
    );
};

export default MyApp;