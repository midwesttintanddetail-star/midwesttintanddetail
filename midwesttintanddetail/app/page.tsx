import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center hero-overlay">
        {/* Background images — mobile vs desktop */}
        <Image
          src="/hero-mobile.png"
          alt="Midwest Tint & Detail"
          fill
          className="object-cover md:hidden"
          priority
          quality={85}
        />
        <Image
          src="/hero-desktop.png"
          alt="Midwest Tint & Detail"
          fill
          className="object-cover hidden md:block"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-background z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">
              5-Star Rated • Lifetime Warranty
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-tight">
            Plymouth&apos;s #1 Trusted<br />
            <span className="text-accent">Tint &amp; Detail</span> Shop
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Premium ceramic window tinting with a lifetime warranty. Ceramic coating,
            paint correction, and full interior &amp; exterior detailing.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              5-Star Google Rating
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Lifetime Warranty
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link href="/booking" className="btn-primary text-base !py-3.5 !px-8">
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link href="/services" className="btn-outline text-base !py-3.5 !px-8">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-3xl font-black text-white">5</span>
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="text-xs text-muted uppercase tracking-wider">Google Rating</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">100%</p>
              <p className="text-xs text-muted uppercase tracking-wider mt-1">Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-black text-accent">∞</p>
              <p className="text-xs text-muted uppercase tracking-wider mt-1">Lifetime Warranty</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white">Plymouth</p>
              <p className="text-xs text-muted uppercase tracking-wider mt-1">Locally Owned</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              From premium ceramic window tinting to full interior and exterior detailing,
              we&apos;ve got your vehicle covered.
            </p>
          </div>

          {/* Primary service - Window Tinting */}
          <div className="mb-12">
            <div className="service-card bg-surface-light border border-accent/20 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto min-h-[300px]">
                  <Image src="/ceramictintmain.webp" alt="Ceramic Window Tinting" fill className="object-cover" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest mb-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    #1 Service
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
                    Ceramic Window Tinting
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed">
                    We specialize in premium <strong className="text-white">ceramic window film</strong> that delivers
                    superior heat rejection, UV protection, and crystal-clear visibility. Our ceramic
                    tint blocks up to 99% of UV rays and significantly reduces interior heat — all while
                    maintaining a sleek, factory look.
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Lifetime Warranty
                    </div>
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      99% UV Block
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href="/services" className="btn-primary">
                      Get a Quote
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Ceramic Coating */}
            <div className="service-card bg-surface-light border border-border rounded-xl overflow-hidden group">
              <div className="relative h-48">
                <Image src="/download.jpg" alt="Ceramic Coating" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white uppercase">Ceramic Coating</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Long-lasting protection for your paint with a hydrophobic ceramic coating
                  that keeps your vehicle looking showroom-fresh.
                </p>
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-1.5 mt-4 text-accent text-sm font-semibold group-hover:gap-3 transition-all"
                >
                  Get a Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Paint Correction */}
            <div className="service-card bg-surface-light border border-border rounded-xl overflow-hidden group">
              <div className="relative h-48">
                <Image src="/paintcorrectionmain.jpg" alt="Paint Correction" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white uppercase">Paint Correction</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Remove swirl marks, scratches, and oxidation to restore your paint to a
                  flawless, mirror-like finish.
                </p>
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-1.5 mt-4 text-accent text-sm font-semibold group-hover:gap-3 transition-all"
                >
                  Get a Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Interior Detailing */}
            <div className="service-card bg-surface-light border border-border rounded-xl overflow-hidden group">
              <div className="relative h-48">
                <Image src="/interiordetailingmain.jpg" alt="Interior Detailing" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white uppercase">Interior Detailing</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Deep cleaning and restoration of your vehicle&apos;s interior — leather
                  conditioning, carpet shampooing, and more.
                </p>
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-1.5 mt-4 text-accent text-sm font-semibold group-hover:gap-3 transition-all"
                >
                  Get a Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Exterior Detailing */}
            <div className="service-card bg-surface-light border border-border rounded-xl overflow-hidden group">
              <div className="relative h-48">
                <Image src="/exteriordetailingmain.jpg" alt="Exterior Detailing" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white uppercase">Exterior Detailing</h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  Premium exterior wash, clay bar treatment, polish, and sealant for a
                  stunning showroom finish.
                </p>
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-1.5 mt-4 text-accent text-sm font-semibold group-hover:gap-3 transition-all"
                >
                  Get a Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 sm:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                Why Us
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white uppercase">
                Why Choose <span className="text-accent">Midwest</span>?
              </h2>
              <p className="mt-5 text-muted leading-relaxed">
                We&apos;re not just another detail shop. At Midwest Tint &amp; Detail, we combine
                premium products with expert craftsmanship to deliver results that exceed your expectations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Ceramic Film Focus</h4>
                    <p className="text-muted text-sm mt-1">Industry-leading ceramic tint for superior heat rejection and clarity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Lifetime Warranty</h4>
                    <p className="text-muted text-sm mt-1">All window tint installations backed by our lifetime warranty.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">5-Star Rated</h4>
                    <p className="text-muted text-sm mt-1">Perfect 5-star rating on Google from satisfied customers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Plymouth Local</h4>
                    <p className="text-muted text-sm mt-1">Proudly serving Plymouth and the surrounding Metro Detroit area.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/ceramictint2.webp" alt="Ceramic window tinting work" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR PROCESS ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Our Process
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase">
              Simple &amp; Reliable <span className="text-accent">Vehicle Protection</span>
            </h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              We follow a detailed and precise process to ensure your vehicle gets the protection it deserves.
              From the moment you book an appointment to the final reveal, we prioritize quality, care, and your satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Assessment",
                  description:
                    "We begin with a thorough consultation to understand your needs. Whether you're looking for window tinting, ceramic coating, or detailing, we assess your vehicle to recommend the best solutions tailored to your needs.",
                },
                {
                  step: "02",
                  title: "Surface Preparation",
                  description:
                    "Before any installation, we meticulously prepare your vehicle's surfaces. This includes cleaning, polishing, and ensuring the area is free from contaminants. Proper preparation guarantees flawless results and long-lasting protection.",
                },
                {
                  step: "03",
                  title: "Expert Installation",
                  description:
                    "Our team uses high-quality materials and advanced tools for precise application. From seamless window tinting to durable ceramic coatings, every detail is perfected. Each service is completed with expert care to maintain your vehicle's finish.",
                },
                {
                  step: "04",
                  title: "Quality Check & Final Reveal",
                  description:
                    "Once the installation is complete, we perform a detailed quality inspection. This ensures that every layer of protection meets our high standards. We then walk you through the results, so you can drive away confident in your vehicle's enhanced protection.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-accent text-sm font-black">{item.step}</span>
                    </div>
                    {item.step !== "04" && (
                      <div className="w-0.5 h-full bg-accent/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="text-lg font-bold text-white uppercase">{item.title}</h3>
                    <p className="mt-2 text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Images */}
            <div className="space-y-4">
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-border">
                <Image src="/ceramictintmain.webp" alt="Window tinting process" fill className="object-cover" />
              </div>
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-border">
                <Image src="/exteriordetailingmain.jpg" alt="Finished vehicle detail" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="text-center mt-14">
            <Link href="/booking" className="btn-primary text-base !py-3.5 !px-8">
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE REVIEWS ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Google header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              {/* Google "G" Logo */}
              <svg className="w-10 h-10" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <span className="text-white text-lg font-semibold">Google Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-4xl font-black text-white">5.0</span>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FBBC05]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted text-xs mt-1">Based on Google Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Review 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#673AB7] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">R</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Ruba Ali</p>
                    <p className="text-muted text-xs">a week ago</p>
                  </div>
                </div>
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                &ldquo;Just got my Nissan Rogue tinted with them. Honestly a really good experience all around. I went in not really knowing anything about tinting other than that I wanted my car done and Moe was able to answer all of my questions. He seems like a really genuine guy who cares about his work.&rdquo;
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E91E63] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">N</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Nick Sheild</p>
                    <p className="text-muted text-xs">4 months ago</p>
                  </div>
                </div>
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                &ldquo;Moe came out to my restaurant which was quite a ways away from him and did a fantastic job on my Chevy Blazer which was in really rough shape. Great customer service and great work. Thank you Moe&rdquo;
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF9800] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Sandra Killmar</p>
                    <p className="text-muted text-xs">4 months ago</p>
                  </div>
                </div>
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                &ldquo;Moe&apos;s Detailing answered my request on FB &amp; responded to a couple messages promptly about coming out &amp; detailing my Ford Edge at my house. He &amp; another gentleman came out, exactly at the time specified, for the price quoted, &amp; did an amazing job!&rdquo;
              </p>
            </div>

            {/* Review 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#34A853] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">J</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Jeff Bladel</p>
                    <p className="text-muted text-xs">4 months ago</p>
                  </div>
                </div>
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                &ldquo;Moes detailing came out to my house and detailed my Cherokee. They did an amazing job! I&apos;m so happy with the work they did. My 2021 Cherokee looks and smells brand new. They went above and beyond what I expected.&rdquo;
              </p>
            </div>

            {/* Review 5 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4285F4] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">J</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Joe Teichman</p>
                    <p className="text-muted text-xs">4 months ago</p>
                  </div>
                </div>
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                &ldquo;Professional, courteous and respectful. Came out on a rainy day and got the car looking phenomenal. Would highly recommend for detailing. Gonna schedule a ceramic coating next time.&rdquo;
              </p>
            </div>

            {/* Review 6 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EA4335] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">R</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">R F</p>
                    <p className="text-muted text-xs">5 months ago</p>
                  </div>
                </div>
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                &ldquo;Moe and team did a phenomenal job on our car. We have 2 toddlers and the car was a true mess. Moe was professional, efficient and provided a great quality service.&rdquo;
              </p>
            </div>
          </div>

          {/* Review us on Google CTA */}
          <div className="text-center mt-10">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJjaobTTS5XycR_YkgXISrhBA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors border border-white/10 rounded-full px-6 py-2.5 hover:border-white/30"
            >
              <svg className="w-4 h-4" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              Review us on Google
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 sm:py-28 bg-surface relative overflow-hidden">
        {/* Accent glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase">
            Ready to Protect <span className="text-accent">Your Ride</span>?
          </h2>
          <p className="mt-5 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Whether you need ceramic window tinting, a full detail, or paint correction —
            reach out and we&apos;ll take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
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
      </section>
    </>
  );
}
