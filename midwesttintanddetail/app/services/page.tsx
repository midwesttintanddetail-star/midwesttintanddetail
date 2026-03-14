import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Services | Midwest Tint & Detail",
    description:
        "Explore our full range of services: ceramic window tinting with lifetime warranty, ceramic coating, paint correction, and interior & exterior detailing in Plymouth, MI.",
};

const services = [
    {
        id: "window-tinting",
        title: "Ceramic Window Tinting",
        primary: true,
        badge: "#1 Service",
        description:
            "We specialize in premium ceramic window film that delivers superior heat rejection, UV protection, and crystal-clear visibility. Our ceramic tint blocks up to 99% of UV rays and significantly reduces interior heat — all while maintaining a sleek, factory look.",
        features: ["Lifetime Warranty", "99% UV Block", "Heat Rejection", "Crystal-Clear Clarity"],
        mainImage: "",
        mainVideo: "/ceramiccoatingvid.mp4",
        gallery: [],
    },
    {
        id: "ceramic-coating",
        title: "Ceramic Coating",
        primary: false,
        description:
            "Long-lasting protection for your vehicle's paint with a hydrophobic ceramic coating that repels water, dirt, and contaminants. Keep your vehicle looking showroom-fresh with a deep, glossy shine that lasts for years.",
        features: ["Hydrophobic Protection", "UV Resistance", "Deep Gloss Finish", "Easy Maintenance"],
        mainImage: "/ceramic_1.jpg",
        mainVideo: "",
        gallery: ["/ceramic_2.jpg"],
    },
    {
        id: "paint-correction",
        title: "Paint Correction",
        primary: false,
        description:
            "Remove swirl marks, scratches, and oxidation to restore your paint to a flawless, mirror-like finish. Our multi-stage paint correction process uses professional-grade compounds and polishes to bring your paint back to life.",
        features: ["Swirl Removal", "Scratch Repair", "Oxidation Removal", "Mirror Finish"],
        mainImage: "/paint_correction_1.jpg",
        mainVideo: "",
        gallery: ["/paint_correction_2.jpg"],
    },
    {
        id: "interior-detailing",
        title: "Interior Detailing",
        primary: false,
        description:
            "Deep cleaning and restoration of your vehicle's interior. From leather conditioning to carpet shampooing, we make your cabin look and feel brand new. Every surface is meticulously cleaned, conditioned, and protected.",
        features: ["Leather Conditioning", "Carpet Shampooing", "Dashboard Restoration", "Odor Elimination"],
        mainImage: "",
        mainVideo: "/interior_amg.mp4",
        gallery: [],
    },
    {
        id: "exterior-detailing",
        title: "Exterior Detailing",
        primary: false,
        description:
            "Premium exterior detailing that goes beyond a basic wash. Our process includes clay bar treatment, machine polish, and sealant application to transform your vehicle's exterior to a stunning showroom finish.",
        features: ["Clay Bar Treatment", "Machine Polish", "Sealant Application", "Wheel & Tire Detail"],
        mainImage: "/exterior_cadillac.jpg",
        mainVideo: "",
        gallery: ["/engine_before.jpg", "/engine_after.jpg"],
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                        What We Offer
                    </span>
                    <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase">
                        Our <span className="text-accent">Services</span>
                    </h1>
                    <p className="mt-4 text-muted max-w-2xl mx-auto">
                        From premium ceramic window tinting to full interior and exterior
                        detailing, we&apos;ve got your vehicle covered. Every service leads
                        with quality and backed by our commitment to excellence.
                    </p>
                </div>

                {/* Services */}
                <div className="space-y-20">
                    {services.map((service) => (
                        <section key={service.id} id={service.id}>
                            {/* Service Header */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                {/* Main Image or Video */}
                                <div
                                    className={`relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] xl:aspect-[2/3] max-h-[700px] w-full rounded-xl overflow-hidden bg-black ${service.primary ? "border-2 border-accent/30 shadow-lg shadow-accent/10" : "border border-border shadow-2xl shadow-black/50"
                                        }`}
                                >
                                    {service.mainVideo ? (
                                        <video
                                            src={service.mainVideo}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover object-center"
                                        />
                                    ) : service.mainImage ? (
                                        <Image
                                            src={service.mainImage}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : null}
                                    {service.primary && (
                                        <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 bg-accent/90 text-white text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5">
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                            {service.badge}
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
                                        {service.title}
                                    </h2>
                                    <p className="mt-4 text-muted leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-3 mt-6">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm">
                                                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-white/80">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <Link href="/contact" className="btn-primary">
                                            Get a Quote
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Gallery */}
                            {service.gallery.length > 0 && (
                                <div className="mt-8">
                                    <div className={`grid gap-4 ${service.gallery.length === 1
                                            ? "grid-cols-1 max-w-lg"
                                            : service.gallery.length === 2
                                                ? "grid-cols-1 sm:grid-cols-2"
                                                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                                        }`}>
                                        {service.gallery.map((img, i) => (
                                                <div
                                                    key={i}
                                                    className="relative aspect-square sm:aspect-[4/5] md:aspect-video rounded-lg overflow-hidden border border-border hover:border-accent/30 transition-colors shadow-xl shadow-black/40"
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`${service.title} gallery image ${i + 1}`}
                                                        fill
                                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                                    />
                                                </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Divider (except last) */}
                            {service.id !== "exterior-detailing" && (
                                <div className="mt-20 border-t border-border" />
                            )}
                        </section>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center">
                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">
                        Ready to Get <span className="text-accent">Started</span>?
                    </h2>
                    <p className="mt-4 text-muted max-w-xl mx-auto">
                        Reach out for a free quote and we&apos;ll get you scheduled.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <Link href="/booking" className="btn-primary text-base !py-3.5 !px-8">
                            Get a Free Quote
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <a href="tel:3137290005" className="btn-outline text-base !py-3.5 !px-8">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call (313) 729-0005
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
