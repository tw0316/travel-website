"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

// Slick Carousel Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// Destination List
const destinations = [
  { name: "Maldives", image: "/images/maldives.jpg", path: "/destinations/maldives" },
  { name: "Indonesia", image: "/images/indonesia.jpg", path: "/destinations/indonesia" },
  { name: "Vietnam", image: "/images/vietnam.jpg", path: "/destinations/vietnam" },
  { name: "Sri Lanka", image: "/images/srilanka.jpg", path: "/destinations/srilanka" },
  { name: "India", image: "/images/india.jpg", path: "/destinations/india" },
  { name: "France", image: "/images/france.jpg", path: "/destinations/france" },
];

const Destinations: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-500 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Explore Popular Destinations</h2>

        <Slider {...sliderSettings}>
          {destinations.map((destination, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Image with hover effect */}
                <div className="relative group">
                  <Link href={destination.path} passHref>
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 flex items-center justify-center transition-opacity duration-300">

                      <p className="text-2xl font-semibold text-white opacity-0 group-hover:opacity-100">
                        Explore
                      </p>
                    </div>
                  </Link>
                </div>
                
                {/* Country name below image (outside Link) */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {destination.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Destinations;