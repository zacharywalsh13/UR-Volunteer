"use client"
// Importing necessary modules and components
import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import ServiceDropdown from '../ServiceSwitchButton/page'

// Leader type definition
type Leader = {
  name: string;
  subtitle: string;
  description: string;
};

export default function Leaders() {
  const [leadersData, setLeadersData] = useState<Leader[] | null>(null);
  const [service, setService] = useState("SundayAM");

  useEffect(() => {
    const type = `leader${service}`;
    client
      .fetch(`*[_type == "${type}"]{name, subtitle, description}`)
      .then((data: Leader[]) => setLeadersData(data))
      .catch(console.error);
  }, [service]);

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <ServiceDropdown currentService={service} setCurrentService={setService} />
      <div className="container mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadersData &&
            leadersData.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden m-4"
              >
                <div className="flex flex-col space-y-4 items-center justify-center">
                  <div className="w-full">
                    <img
                      className="w-full h-full object-cover"
                      src="/Images/headshot-2.jpg"
                      alt={leader.name}
                    />
                  </div>
                  <div className="p-8">
                    <h1 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">
                      {leader.name}
                    </h1>
                    <h3 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline text-center">
                      {leader.subtitle}
                    </h3>
                    <p className="mt-2 text-gray-500 text-center">{leader.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
