"use client"
import React, { useState, useEffect } from 'react'
import { client } from '../../../sanity/lib/client'

type Event = {
  title: string;
  date: string;
  description: string;
};


const Events = () => {
  const [eventsData, setEventsData] = useState<Event[] | null>(null)

  useEffect(() => {
    client.fetch('*[_type == "event"]{title, date, description}')
      .then((data: Event[]) => setEventsData(data))
      .catch(console.error)
  }, [])

  return (
    <div>
      <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold pt-5">Events</h1>
      {eventsData ? eventsData.map((event: Event, index: number) => (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-10" key={index}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 lg:w-5/12 px-4">
              <img src={'/images/Volunteer8.jpg'} alt="" className="w-full h-auto" />
            </div>
            <div className="w-full sm:w-1/2 lg:w-7/12 px-4 flex flex-col justify-center">
              <h1 className="text-left  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">{event.title}</h1>
              <h2 className="text-left  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">{event.date}</h2>
              <p className="text-left  text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{event.description}</p>
            </div>
          </div>
        </div>
      )) : <h2>Loading...</h2>}
    </div>
  )
}

export default Events
