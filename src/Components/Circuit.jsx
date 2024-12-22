import React from "react";
import NonCircuitnTech from "./NonCircuitnTech";
import CircuitTec from "./CircuitTec";
import EventButton from "./EventButton";
import { Link } from "react-router-dom";
import TrackInfo from "./TrackInfo";
import img from "../assets/symposium/OverallPoster.jpeg";
import "animate.css";
const Circuit = () => {
  return (
    <div>
      <TrackInfo
        label="TRACK II"
        Image={img}
        Description="Registration for Technovenza is now open! Secure your spot today and
            be part of an event that celebrates innovation and collaboration.
            Don’t miss the opportunity to engage with tech enthusiasts and experts."
      />

      <CircuitTec />
      <NonCircuitnTech />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeN-2jLB-1VDYrKwieEQC7grGuG-QyDJXsfqIpr3YAx-cbtXA/viewform"
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

export default Circuit;
