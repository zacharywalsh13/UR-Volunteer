"use client"
// Import necessary libraries
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Helper function to create class names string
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Dropdown component
export default function ServiceDropdown({ currentService, setCurrentService }) {
  // Function that handles when a menu item is clicked
  const handleClick = (service) => {
    setCurrentService(service);
  };

  // Function to add a space in the given string before the last two characters
  function addSpace(text) {
    return text.slice(0, -2) + " " + text.slice(-2);
  }

  // Component render
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* Button that triggers dropdown */}
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {addSpace(currentService)}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      {/* Transition for the dropdown menu */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* Dropdown menu items */}
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {/* Conditionally render each menu item based on the current service */}
            {currentService !== "SaturdayPM" && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleClick("SaturdayPM")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Saturday PM
                  </button>
                )}
              </Menu.Item>
            )}
            {currentService !== "SundayAM" && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleClick("SundayAM")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Sunday AM
                  </button>
                )}
              </Menu.Item>
            )}
            {currentService !== "SundayPM" && (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleClick("SundayPM")}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Sunday PM
                  </button>
                )}
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
