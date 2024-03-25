import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
    return (
        <section id="contact" className="flex items-center justify-center h-screen w-3/4 mx-auto">
            <div className="w-1/4 p-4">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eros in aliquam facilisis.</p>
            </div>
            <div>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;