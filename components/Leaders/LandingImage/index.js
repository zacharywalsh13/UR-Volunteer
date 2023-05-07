import React from 'react';

export default function LandingImage() {
  return (
    <div className="container mx-auto">
      <div className="relative flex justify-center items-center w-4/5 mx-auto">
        <img src="/Images/Volunteer8-3.jpg" alt="Volunteer" className="w-full" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-sans font-bold text-7xl">
          Service Leads
        </h1>
      </div>
    </div>
  );
}
