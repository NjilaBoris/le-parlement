"use client";
import { LogoIcon } from "@/icons";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [dateTime, setDateTime] = useState({
    date: "",
    time: "",
  });
  const [location, setLocation] = useState("Loading...");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      setDateTime({
        date: now.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        }),
        time: now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        setLocation(`${data.city}, ${data.country_code}`);
      } catch (error) {
        setLocation("Unable to fetch location");
      }
    };

    fetchLocation();
  }, []);
  return (
    <div className="flex flex-col w-full h-fit fixed">
      <div className="flex items-center py-4 justify-between w-[calc(100%-4rem)] mx-auto h-full max-lg:hidden">
        <div className="font-inter space-x-1 text-[#657285] text-[0.75rem]">
          <span>{dateTime.date}</span>- <span>{dateTime.time}</span>
        </div>
        <div className="flex items-center gap-1 font-inter">
          <LogoIcon className="size-10" />
          <p className="text-[1rem] font-medium uppercase flex items-center">
            le parle <span className="text-red-600">ment</span>
          </p>
        </div>
        <div className="font-inter text-[#657285] text-[0.75rem]">
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
