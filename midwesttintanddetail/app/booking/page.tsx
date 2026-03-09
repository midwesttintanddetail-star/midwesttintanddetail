import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
    title: "Book an Appointment | Midwest Tint & Detail",
    description:
        "Request an appointment with Midwest Tint & Detail in Plymouth, MI. Fill out our form and we'll reach out to get you scheduled for window tinting, ceramic coating, paint correction, or detailing.",
};

export default function BookingPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                        Book Now
                    </span>
                    <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase">
                        Request an <span className="text-accent">Appointment</span>
                    </h1>
                    <p className="mt-4 text-muted max-w-2xl mx-auto">
                        Fill out the form below and someone from our team will reach out to
                        you shortly to get you scheduled.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-3 lg:order-1">
                        <div className="bg-surface-light border border-border rounded-lg p-6 sm:p-8 lg:p-10">
                            <ContactForm
                                heading="Tell Us About Your Vehicle"
                                subtext="Our business hours are 9 AM – 5 PM, Monday through Friday. Please be patient with us as we stay very busy — someone will reach out to you shortly to get you scheduled!"
                                showVehicle={true}
                                showDate={true}
                            />
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="lg:col-span-2 lg:order-2 space-y-6">
                        {/* What to Expect */}
                        <div className="bg-surface-light border border-border rounded-lg p-6">
                            <h3 className="text-lg font-bold text-white mb-5">What to Expect</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-accent text-sm font-bold">1</span>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold">Submit Your Request</p>
                                        <p className="text-muted text-xs mt-0.5">Fill out the form with your vehicle and service details.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-accent text-sm font-bold">2</span>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold">We&apos;ll Reach Out</p>
                                        <p className="text-muted text-xs mt-0.5">A team member will contact you to discuss your needs and pricing.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-accent text-sm font-bold">3</span>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold">Get Scheduled</p>
                                        <p className="text-muted text-xs mt-0.5">We&apos;ll find a time that works for you and confirm your appointment.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-accent text-sm font-bold">4</span>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold">Drop Off Your Vehicle</p>
                                        <p className="text-muted text-xs mt-0.5">Bring your vehicle to our shop and we&apos;ll take care of the rest.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact */}
                        <div className="bg-surface-light border border-border rounded-lg p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Prefer to Call?</h3>
                            <p className="text-muted text-sm mb-4">
                                Give us a call directly and we&apos;ll be happy to help.
                            </p>
                            <a
                                href="tel:3137290005"
                                className="btn-outline w-full justify-center text-sm"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                (313) 729-0005
                            </a>
                        </div>

                        {/* Location */}
                        <div className="bg-surface-light border border-border rounded-lg p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Our Location</h3>
                            <div className="flex items-start gap-3 mb-4">
                                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p className="text-white text-sm font-semibold">Midwest Tint & Detail</p>
                                    <p className="text-muted text-sm">524 Farmer St, Plymouth, MI 48170</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <p className="text-white text-sm font-semibold">Business Hours</p>
                                    <p className="text-muted text-sm">Mon – Fri: 9 AM – 5 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
