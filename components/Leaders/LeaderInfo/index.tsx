"use client";

import "tailwindcss/tailwind.css";

import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";

type Leader = {
  name: string;
  subtitle: string;
  description: string;
};

export default function Leaders() {
  const [leadersData, setLeadersData] = useState<Leader[] | null>(null);

  useEffect(() => {
    client
      .fetch('*[_type == "leader"]{name, subtitle, description}')
      .then((data: Leader[]) => setLeadersData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leadersData &&
            leadersData.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden m-4"
              >
                <div className="flex flex-col space-y-4">
                  <div className="w-full">
                    <img
                      className="w-full h-full object-cover"
                      src="/Images/headshot-2.jpg"
                      alt={leader.name}
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {leader.name}
                    </div>
                    <a
                      href="#"
                      className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                      {leader.subtitle}
                    </a>
                    <p className="mt-2 text-gray-500">{leader.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
