import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | Midwest Tint & Detail",
    description:
        "Get in touch with Midwest Tint & Detail in Plymouth, MI. Call (313) 729-0005 or fill out our contact form for a free quote.",
};

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                        Contact Us
                    </span>
                    <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase">
                        Get in <span className="text-accent">Touch</span>
                    </h1>
                    <p className="mt-4 text-muted max-w-2xl mx-auto">
                        Have a question or ready to schedule a service? Reach out to us and
                        we&apos;ll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Info Cards */}
                        <div className="bg-surface-light border border-border rounded-lg p-6">
                            <h3 className="text-lg font-bold text-white mb-5">Contact Information</h3>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold">Phone</p>
                                        <a href="tel:3137290005" className="text-muted text-sm hover:text-accent transition-colors">
                                            (313) 729-0005
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold">Address</p>
                                        <p className="text-muted text-sm">
                                            524 Farmer St<br />
                                            Plymouth, MI 48170
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold">Hours</p>
                                        <p className="text-muted text-sm">Mon – Sat: 9 AM – 5 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold">Instagram</p>
                                        <a
                                            href="https://instagram.com/MidwestTintDetail"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted text-sm hover:text-accent transition-colors"
                                        >
                                            @MidwestTintDetail
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-surface-light border border-border rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.5!2d-83.47!3d42.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s524+Farmer+St+Plymouth+MI+48170!5e0!3m2!1sen!2sus!4v1"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Midwest Tint & Detail Location"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-surface-light border border-border rounded-lg p-6 sm:p-8 lg:p-10">
                            <ContactForm
                                heading="Send Us a Message"
                                subtext="Fill out the form below and we'll get back to you as soon as possible. Our business hours are 9 AM – 5 PM, Monday through Saturday."
                                showVehicle={true}
                                showDate={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
