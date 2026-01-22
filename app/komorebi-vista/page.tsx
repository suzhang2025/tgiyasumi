import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      {/* Navigation - Minimal and Transparent */}
      <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="text-white font-bold text-2xl tracking-widest drop-shadow-md">
          <Link href="/" className="hover:opacity-80 transition-opacity">TGIYasumi</Link>
        </div>
        <div className="hidden md:flex gap-8 text-white font-medium drop-shadow-md">
          <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <Link href="/komorebi-vista" className="hover:opacity-80 transition-opacity">Projects</Link>
          <Link href="/#contact" className="hover:opacity-80 transition-opacity">Contact</Link>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Komorebi Vista Retreat"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white space-y-8 animate-in fade-in zoom-in duration-1000">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight drop-shadow-lg">
            Komorebi Vista
          </h1>
          <p className="mx-auto max-w-2xl text-xl md:text-2xl font-light text-zinc-100 drop-shadow-md">
            Where the sunlight filters through the trees to meet the waters of Lake Biwa.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
            <button className="group relative px-8 py-3.5 bg-white text-black rounded-full font-medium transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95">
              Coming Soon
            </button>
            <button className="px-8 py-3.5 rounded-full font-medium text-white border border-white/30 backdrop-blur-md hover:bg-white/10 transition-all hover:border-white">
              View Gallery
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/80"
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 dark:text-zinc-50 leading-tight">
              A Sanctuary for the Soul
            </h2>
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              <p>
                In a world that never stops, Komorebi Vista offers a pause on the shores of Lake Biwa. Our architectural cabins are designed to blur the lines between shelter and the sparse woodlands, inviting the serenity of the lake indoors.
              </p>
              <p>
                Inspired by the Japanese concept of "Komorebi"—sunlight filtering through trees—our spaces are crafted to capture the shifting light throughout the day, creating a living canvas of shadows and warmth against the backdrop of Japan's ancient waters.
              </p>
            </div>
            <button className="text-sm font-medium tracking-widest uppercase border-b border-zinc-900 dark:border-zinc-50 pb-1 hover:opacity-60 transition-opacity">
              Read Our Story
            </button>
          </div>
          <div className="flex-1 relative h-[600px] w-full shadow-2xl overflow-hidden rounded-sm">
            <Image
              src="/images/vision-cabin.png"
              alt="Interior tailored for relaxation"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Gallery Feature Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-black">
        <div className="absolute inset-0 opacity-70">
          <Image
            src="/images/gallery-feature.png"
            alt="Architectural details"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white space-y-6 max-w-2xl px-6">
          <h2 className="text-4xl md:text-6xl font-serif italic">
            "Nature does not hurry, yet everything is accomplished."
          </h2>
          <p className="text-xl font-light opacity-90">
            — Lao Tzu
          </p>
          <div className="pt-8">
            <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all rounded-full text-lg">
              Explore the Gallery
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
