import React from "react";
import NonCircuitnTech from "./NonCircuitnTech";
import NonCircuitTec from "./NonCircuitTec";
import EventButton from "./EventButton";
import { Link } from "react-router-dom";
import TrackInfo from "./TrackInfo";
import img from "../assets/symposium/overallPoster.jpg";
import OnStageEvents from "./OnStageEvents";
import { AlertTriangle, Calendar, Clock } from "lucide-react";

const OnStage = () => {
  return (
    <div>
      <marquee behavior="scroll" direction="" className="mt-8 text-red-500">
        <AlertTriangle size={18} className="text-red-500 inline-block mx-3 " />
        Registration Deadline: 14 - 03 - 2025
      </marquee>
      <TrackInfo
        label="OnStage"
        Image={img}
        Description="Registration for Technovanza is now open! Secure your spot today and
            be part of an event that celebrates innovation and collaboration.
            Don’t miss the opportunity to engage with tech enthusiasts and experts."
      />
      <OnStageEvents />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSccABdnuMlfiHB0bUyGP0XUXxeLaHJuFR7ao9seUTDPlmyvjw/viewform" // Replace with your actual Google Form URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <EventButton label="Register" />
        </a>
      </div>
      <br />
    </div>
  );
};

export default OnStage;
