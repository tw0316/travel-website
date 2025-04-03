// app/about/page.tsx
import Navbar from '@/components/Navbar';
import React from 'react';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
          <p className="text-lg text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus...
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet...
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt...
          </p>
        </div>
      </main>
    </>
  );
};

export default About;