import React, { useRef } from 'react';
import confetti from 'canvas-confetti';

const ContactForm: React.FC = () => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleClick = () => {
		const button = buttonRef.current;
		if (button) {
			const { top, left, width, height } = button.getBoundingClientRect();
			confetti({
				particleCount: 100,
				startVelocity: 40,
				spread: 90,
				angle: 90,
				origin: { x: (left + width / 2) / window.innerWidth, y: (top + height / 2) / window.innerHeight },
			});
		}
	};

	return (
		<section id="contact">
			<div className="contact-form-container flex justify-center items-center">
				<div className="shadow-md p-8 mb-4 contact-form">
					<h2 className="mb-4 text-2xl text-center contact-form-header">LETS BUILD SOMETHING TOGETHER</h2>
					<form>
						<div className="mb-4 grid grid-cols-2 gap-4">
							<div>
								<label className="block text-sm font-bold mb-2" htmlFor="name">
									Name
								</label>
								<input
									className="shadow appearance-none border-none border-b rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label className="block text-sm font-bold mb-2" htmlFor="email">
									Email
								</label>
								<input
									className="shadow appearance-none border-none border-b rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Your email"
								/>
							</div>
						</div>
						<div className="mb-6">
							<label className="block text-sm font-bold mb-2" htmlFor="message">
								Message
							</label>
							<textarea
								className="shadow appearance-none border-none border-b rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
								id="message"
								placeholder="Your message"
								rows={4}
							></textarea>
						</div>
						<div className="flex items-center justify-center">
							<div className="inline-flex items-center justify-center contact-btn">
								<button
									ref={buttonRef}
									className="inline-block font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="button"
									onClick={handleClick}
								>
									SEND MESSAGE
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;