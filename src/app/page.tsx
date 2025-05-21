"use client";
import Time from "@/app/time";
import { useState } from "react";

export default function Home() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const countDownDate = new Date("May 25, 2026").getTime();

  // Update the count down every 1 second
  const interval = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(interval);
    }
  }, 1000);
  return (
    <div className="h-screen flex flex-col bg-[url('/download.jpg')] bg-no-repeat bg-cover">
      <div className="text-center text-white text-4xl font-semibold p-8 font-serif mt-10">
        Ministry of Interior
        <div className="mt-20 -mb-50">
          End date: <span className=" text-red-500">May 25, 2026</span>
        </div>
      </div>
      <div className="flex-grow flex flex-row flex-wrap items-center justify-center">
        <Time number={days} type={"days"} />
        <Time number={hours} type={"hours"} />
        <Time number={minutes} type={"minutes"} />
        <Time number={seconds} type={"seconds"} />
      </div>
    </div>
  );
}
