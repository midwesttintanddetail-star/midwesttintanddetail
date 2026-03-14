"use client";

import { useState } from "react";

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        const formData = new FormData(form);

        // Custom validation: At least one service selected
        const services = formData.getAll("Services");
        if (services.length === 0) {
            setSubmitStatus("error");
            setErrorMessage("Please select at least one service.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus("success");
                form.reset();
            } else {
                const data = await response.json();
                setSubmitStatus("error");
                setErrorMessage(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage("Network error. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === "success") {
        return (
            <div className="w-full text-center py-12 px-6 bg-surface-light border border-accent/20 rounded-2xl animate-fade-in">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
                <p className="text-muted leading-relaxed mb-6">
                    Thank you for reaching out to Midwest Tint & Detail. We have received your inquiry and will get back to you shortly.
                </p>
                <button 
                    onClick={() => setSubmitStatus("idle")}
                    className="btn-primary"
                >
                    Submit Another Request
                </button>
            </div>
        );
    }

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

            {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500 text-sm flex items-start gap-3 animate-fade-in">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{errorMessage}</span>
                </div>
            )}

            <form
                action="https://formsubmit.co/ajax/0bd3434a93070341a231b780c524d516"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                {/* Formsubmit config */}
                <input type="hidden" name="_subject" value="New Inquiry from Website" />
                <input type="hidden" name="_captcha" value="false" />
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
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center text-base !py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-2 w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                        </>
                    ) : (
                        <>
                            Submit Request
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
