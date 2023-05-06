"use client"

import React, { useState, useEffect } from "react";
import styles from "./Events.module.css";
import { fetchText } from "../../../lib/firebaseConfig";

export default function Events() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchText("HOME - Events");
      setEventsData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
    <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold pt-5">Events</h1>
    {eventsData.map((item) => (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-10" key={item.id}>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 lg:w-5/12 px-4">
            <img src={'/images/Volunteer8.jpg'} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full sm:w-1/2 lg:w-7/12 px-4 flex flex-col justify-center">
            <h1 className="text-left  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">{item.title}</h1>
            <h2 className="text-left  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">{item.date}</h2>
            <p className="text-left  text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{item.text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  

  );
}

