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

                {/* Contact Info Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">
                            Name *
                        </label>
                        <input
                            type="text"
                            name="Name"
                            required
                            className="form-input"
                            placeholder="John Doe"
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
                            Vehicle Description
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
                    <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-2.5">
                        Services Interested In
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/80">
                        {/* Invisible grouped input to ensure formsubmit catches it properly without JS if possible, but checkboxes with same name work too */}
                        <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <input type="checkbox" name="Services" value="Window Tint" className="w-4 h-4 rounded border-white/20 bg-transparent text-accent focus:ring-accent/50 focus:ring-offset-0" />
                            <span>Window Tint</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <input type="checkbox" name="Services" value="Ceramic Coating" className="w-4 h-4 rounded border-white/20 bg-transparent text-accent focus:ring-accent/50 focus:ring-offset-0" />
                            <span>Ceramic Coating</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <input type="checkbox" name="Services" value="Paint Correction" className="w-4 h-4 rounded border-white/20 bg-transparent text-accent focus:ring-accent/50 focus:ring-offset-0" />
                            <span>Paint Correction</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                            <input type="checkbox" name="Services" value="Full Detailing" className="w-4 h-4 rounded border-white/20 bg-transparent text-accent focus:ring-accent/50 focus:ring-offset-0" />
                            <span>Full Detailing</span>
                        </label>
                    </div>
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
