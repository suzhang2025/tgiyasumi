import Image from "next/image";
import Link from "next/link";
import GalleryCarousel from "./components/GalleryCarousel";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            {/* Navigation - Minimal and Transparent */}
            <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12">
                <div className="text-white font-bold text-2xl tracking-widest drop-shadow-md">
                    TGIYasumi
                </div>
                <div className="hidden md:flex gap-8 text-white font-medium drop-shadow-md">
                    <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
                    <Link href="/komorebi-vista" className="hover:opacity-80 transition-opacity">Projects</Link>
                    <Link href="/#contact" className="hover:opacity-80 transition-opacity">Contact</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/tgi/hero-fuji-green.png"
                        alt="Mt Fuji with Lush Greenery"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight drop-shadow-lg">
                        Expert Vacation Home Development
                    </h1>
                    <p className="text-xl md:text-2xl font-light opacity-90 drop-shadow-md">
                        Maximise your estate's value with our services.
                    </p>
                    <div className="pt-8">
                        <Link href="/#contact" className="inline-block bg-white text-black px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">
                            Get a Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    <div className="flex-1 w-full aspect-square md:aspect-[4/5] relative">
                        <Image
                            src="/images/tgi/welcome-cabin.jpg"
                            alt="Modern Cabin in Nature"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 space-y-8">
                        <span className="text-sm uppercase tracking-wide text-gray-500">Hello</span>
                        <h2 className="text-5xl md:text-6xl font-bold font-serif text-gray-900">
                            Welcome
                        </h2>
                        <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
                            <p>
                                There's much to see here. So, take your time, look around, and learn all there is to know about us. We hope you enjoy our site and take a moment to drop us a line.
                            </p>
                            <p>
                                At TGIYasumi, we bring the Japanese concept of "Yasumi" (Rest) to life through architectural excellence and nature-integrated living.
                            </p>
                        </div>
                        <Link href="/komorebi-vista" className="inline-block bg-black text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors">
                            Find Out More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Banner Section */}
            <section className="relative w-full py-32 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/images/tgi/banner-wood.jpg"
                        alt="Wood texture background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
                    <h3 className="text-4xl md:text-5xl font-bold font-serif text-white max-w-2xl text-center md:text-left shadow-black drop-shadow-lg">
                        Discover the Best Deals at TGIYasumi Sales!
                    </h3>
                    <Link href="/komorebi-vista" className="inline-block bg-white text-black px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors whitespace-nowrap">
                        Find Out More
                    </Link>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 px-6 md:px-12 bg-gray-50 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-800 mb-4">
                    Explore our curated estate sale treasures
                </h2>
                <div className="w-24 h-px bg-gray-300 mx-auto mb-16" />

                <div className="max-w-7xl mx-auto shadow-2xl overflow-hidden rounded-sm">
                    <GalleryCarousel />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6 md:px-12 bg-white text-center">
                <h2 className="text-4xl font-bold font-serif text-[#A69076] mb-8">
                    Contact Us
                </h2>
                <div className="w-16 h-px bg-gray-200 mx-auto mb-8" />
                <p className="text-xl text-gray-800 mb-12">Drop us a line!</p>

                <form action="mailto:info@tgiyasumi.com" method="post" encType="text/plain" className="max-w-xl mx-auto space-y-6">
                    <div className="text-left space-y-2">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors rounded-none"
                        />
                    </div>
                    <div className="text-left space-y-2">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors rounded-none"
                        />
                    </div>
                    <div className="text-left space-y-2">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Message"
                            required
                            className="w-full p-4 border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors rounded-none resize-none"
                        />
                    </div>
                    <div className="pt-4 text-center">
                        <button type="submit" className="bg-black text-white px-12 py-4 text-sm font-bold uppercase hover:bg-gray-800 transition-colors">
                            Send
                        </button>
                    </div>
                </form>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-white text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} TGIYasumi. All rights reserved.</p>
            </footer>
        </main>
    );
}
