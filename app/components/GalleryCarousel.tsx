"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    {
        src: "/images/tgi/gallery-carousel-1.png",
        alt: "Osaka Cherry Blossoms",
        label: "Osaka Spring",
    },
    {
        src: "/images/tgi/gallery-carousel-2.png",
        alt: "Nara Deer Park",
        label: "Nara Serenity",
    },
    {
        src: "/images/tgi/gallery-carousel-3.png",
        alt: "Lake Biwa Sunset",
        label: "Lake Biwa",
    },
    {
        src: "/images/tgi/gallery-carousel-5.png",
        alt: "Japanese Zen Garden",
        label: "Kyoto Zen",
    },
    {
        src: "/images/tgi/gallery-carousel-6.png",
        alt: "Kyoto's Traditional Atmosphere",
        label: "Traditional Culture",
    },
];

export default function GalleryCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-[70vh] group overflow-hidden bg-black">
            <div
                className="absolute inset-0 transition-transform duration-700 ease-out flex"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div key={index} className="relative min-w-full h-full">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover opacity-90"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-12 left-12 text-white">
                            <h3 className="text-3xl md:text-5xl font-serif font-bold drop-shadow-lg mb-2">
                                {img.label}
                            </h3>
                            <p className="text-lg opacity-90 drop-shadow-md">{img.alt}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 duration-300"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 duration-300"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
