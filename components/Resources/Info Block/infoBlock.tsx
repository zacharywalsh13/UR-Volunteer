"use client"
// Import Sanity client and React hooks
// Import Sanity client and React hooks
import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import "tailwindcss/tailwind.css";

// Define a type for a resource block
type resourceBlock = {
  title: string;
  subtitle: string;
  description: string;
};

// InfoBlock component
export default function InfoBlock() {
  // Using useState hook to handle resourceBlockData
  const [resourceBlockData, setResourceBlockData] = useState<
    resourceBlock[] | null
  >(null);

  // Using useEffect hook to fetch data when component is mounted
  useEffect(() => {
    // Fetch data from sanity
    client
      .fetch('*[_type == "resourceBlock"]{title, subtitle, description}')
      .then((data: resourceBlock[]) => setResourceBlockData(data)) // Update state with fetched data
      .catch(console.error); // Log any errors
  }, []);

  // Render the component
  return (
    <div className="pt-10 pl-4 pr-4 w-4/5 mx-auto">
      {/* Loop through resourceBlockData and render each block */}
      {resourceBlockData &&
        resourceBlockData.map((resourceBlock, index) => (
          <div key={index} className="bg-gray-100 rounded-xl mb-4 p-4 text-center">
            <div className="">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl ">{resourceBlock.title}</h1>{" "}
                {/* Render the title */}
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-lg">{resourceBlock.subtitle}</h2>{" "}
                {/* Render the subtitle */}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-md">{resourceBlock.description}</p>{" "}
                {/* Render the description */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
