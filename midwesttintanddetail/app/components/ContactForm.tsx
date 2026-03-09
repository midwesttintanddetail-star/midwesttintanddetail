"use client";

interface ContactFormProps {
    showVehicle?: boolean;
    showDate?: boolean;
    heading?: string;
    subtext?: string;
}

export default function ContactForm({
    showVehicle = true,
    showDate = false,
    heading,
    subtext,
}: ContactFormProps) {
    return (
        <div className="w-full">
            {heading && (
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {heading}
                </h2>
            )}
            {subtext && (
                <p className="text-muted text-sm mb-8 leading-relaxed">{subtext}</p>
            )}

            <form
                action="https://formsubmit.co/0bd3434a93070341a231b780c524d516"
                method="POST"
                className="space-y-5"
            >
                {/* Formsubmit config */}
                <input type="hidden" name="_subject" value="New Inquiry from Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input
                    type="hidden"
                    name="_next"
                    value="http://localhost:3000/contact?submitted=true"
                />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">
                            First Name *
                        </label>
                        <input
                            type="text"
                            name="First Name"
                            required
                            className="form-input"
                            placeholder="John"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            name="Last Name"
                            required
                            className="form-input"
                            placeholder="Doe"
                        />
                    </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">
                            Email *
                        </label>
                        <input
                            type="email"
                            name="Email"
                            required
                            className="form-input"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            name="Phone"
                            required
                            className="form-input"
                            placeholder="(313) 000-0000"
                        />
                    </div>
                </div>

                {/* Vehicle Info */}
                {showVehicle && (
                    <div>
                        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">
                            Vehicle (Year, Make, Model)
                        </label>
                        <input
                            type="text"
                            name="Vehicle"
                            className="form-input"
                            placeholder="e.g. 2024 BMW M4"
                        />
                    </div>
                )}

                {/* Service Selection */}
                <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">
                        Service Interested In *
                    </label>
                    <select name="Service" required className="form-select">
                        <option value="">Select a service...</option>
                        <option value="Window Tinting">Window Tinting</option>
                        <option value="Ceramic Coating">Ceramic Coating</option>
                        <option value="Paint Correction">Paint Correction</option>
                        <option value="Interior Detailing">Interior Detailing</option>
                        <option value="Exterior Detailing">Exterior Detailing</option>
                        <option value="Full Detail Package">Full Detail Package</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Preferred Date */}
                {showDate && (
                    <div>
                        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">
                            Preferred Date
                        </label>
                        <input
                            type="date"
                            name="Preferred Date"
                            className="form-input"
                        />
                    </div>
                )}

                {/* Message */}
                <div>
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">
                        Message
                    </label>
                    <textarea
                        name="Message"
                        rows={4}
                        className="form-input resize-none"
                        placeholder="Tell us about your project or any questions you have..."
                    />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full justify-center text-base !py-3.5">
                    Submit Request
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </form>
        </div>
    );
}
