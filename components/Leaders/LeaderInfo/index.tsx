"use client";
// Import necessary packages and components
import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client"; // Import the Sanity client to fetch data
import ServiceDropdown from "../ServiceSwitchButton/page"; // Import custom dropdown component

// Define the type of data we expect to receive
type Leader = {
  name: string;
  subtitle: string;
  description: string;
};

// Main function of the Leaders component
export default function Leaders() {
  // Using useState hook to manage leaders data and the currently selected service
  const [leadersData, setLeadersData] = useState<Leader[] | null>(null);
  const [service, setService] = useState("SundayAM");

  // Using useEffect hook to fetch data each time the selected service changes
  useEffect(() => {
    // Define the type of the data to fetch based on the current service
    const type = `leader${service}`;

    // Fetch data from the Sanity backend
    client
      .fetch(`*[_type == "${type}"]{name, subtitle, description}`) // Define the fetch query
      .then((data: Leader[]) => setLeadersData(data)) // Update leadersData state with the fetched data
      .catch(console.error); // Log any errors that occur during fetching
  }, [service]); // Re-run useEffect each time the 'service' state changes

  // Render the Leaders component
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <ServiceDropdown
        currentService={service}
        setCurrentService={setService}
      />{" "}
      {/* Render the dropdown component for service selection */}
      <div className="container mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Map through the leaders data and render each leader */}
          {leadersData &&
            leadersData.map((leader, index) => (
              <div
                key={index} // Unique key for each leader
                className="bg-white rounded-xl shadow-md overflow-hidden m-4" // Styling for each leader card
              >
                <div className="flex flex-col space-y-4 items-center justify-center">
                  <div className="w-full">
                    <img
                      className="w-full h-full object-cover"
                      src="/Images/headshot-2.jpg" // Placeholder image source
                      alt={leader.name} // Alt text for accessibility
                    />
                  </div>
                  <div className="p-8">
                    {/* Render the leader's name, subtitle, and description */}
                    <h1 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">
                      {leader.name}
                    </h1>
                    <h3 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">
                      {leader.subtitle}
                    </h3>
                    <p className="mt-2 text-gray-500 text-center">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
