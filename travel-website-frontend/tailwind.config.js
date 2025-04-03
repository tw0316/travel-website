/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/*/.{js,ts,jsx,tsx}', // For App Router (Next.js 13+)
      './pages/*/.{js,ts,jsx,tsx}', // For Pages Router (if used)
      './components/*/.{js,ts,jsx,tsx}', // For components
    ],
    theme: {
      extend: {
        colors: {
          // Custom gradient colors (for navbar background)
          'gradient-blue': '#1D4ED8',   // Blue
          'gradient-purple': '#8B5CF6', // Purple
          'gradient-pink': '#EC4899',   // Pink
        },
        screens: {
          'sm': '640px',  // Small screens (phones)
          'md': '768px',  // Medium screens (tablets)
          'lg': '1024px', // Large screens (laptops)
          'xl': '1280px', // Extra-large screens (desktops)
          '2xl': '1536px',// Large desktops
        },
      },
    },
    plugins: [],
  }