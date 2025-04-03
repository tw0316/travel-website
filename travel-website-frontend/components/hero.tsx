// app/components/Hero.tsx

import React from "react";
import "animate.css"; // Import animate.css for smooth animations

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/sky.mp4" // Path to your video
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white px-6">
        <div className="space-y-4">
          {/* Main Title with Animation */}
          <h1 className="text-5xl md:text-6xl font-bold opacity-0 animate__animated animate__fadeIn animate__delay-1s">
            ExploreX Travels
          </h1>

          {/* Tagline with Animation */}
          <p className="text-lg md:text-2xl opacity-0 animate__animated animate__fadeIn animate__delay-2s">
            Your gateway to amazing travel experiences.
          </p>

          {/* Site Name with Animation (placed below the video) */}
          <h2 className="text-xl md:text-2xl opacity-0 animate__animated animate__fadeIn animate__delay-3s">
            explorextravels.nobldeed.com
          </h2>

          {/* Call to Action Button with Animation */}
          <a
            href="enquiry"
            className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500 transition-all duration-300 opacity-0 animate__animated animate__fadeIn animate__delay-4s"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;