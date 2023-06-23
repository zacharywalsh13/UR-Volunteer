"use client";

import React, { useState, useEffect } from "react";

import { client } from "../../../sanity/lib/client";

import styles from "./infoBlock.module.css";

type resourceBlock = {
  title: string;
  subtitle: string;
  description: string;
};

export default function InfoBlock() {
  const [resourceBlockData, setResourceBlockData] = useState<
    resourceBlock[] | null
  >(null);

  useEffect(() => {
    client
      .fetch('*[_type == "resourceBlock"]{title, subtitle, description}')
      .then((data: resourceBlock[]) => setResourceBlockData(data))
      .catch(console.error);
  }, []);

  return (
    <div className={`bg-gray-50 rounded ${styles.infoBlock}`}>
      {resourceBlockData &&
        resourceBlockData.map((resourceBlock, index) => (

          <div key={index}>

            <div className="bg-gray-50 rounded">

            <div className="flex flex-col items-center justify-center">
              <h1>{resourceBlock.title}</h1>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2>{resourceBlock.subtitle}</h2>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>{resourceBlock.description}</p>
            </div>

            </div>

          </div>

        ))}
    </div>
  );
}
