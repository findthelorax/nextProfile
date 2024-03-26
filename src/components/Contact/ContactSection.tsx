import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
    return (
        <section id="contact" className="flex items-center justify-center h-[95vh] w-3/4 mx-auto">
            <div className="w-1/4 p-4 contact-side-text">
                <h1 className='mb-4'>ASK ME ANYTHING</h1>
                <h2>Brett Ferrante</h2>
                <h2>Rutland, Vermont</h2>
            </div>
            <div>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;