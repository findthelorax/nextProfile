'use client'
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SkillsScroll from '@/components/SkillsScroll';
import Experience from '@/components/About/Experience';

export default function About() {

	return (
        <div className="flex flex-col min-h-screen">
			<Navbar />
            <main className="flex-grow mt-24">
			<SkillsScroll />
			<Experience />
			</main>
			<Footer />
		</div>
	);
}