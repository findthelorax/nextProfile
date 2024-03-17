'use client'
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Home() {

	return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
			<Navbar />
			</main>
			<Footer />
		</div>
	);
}