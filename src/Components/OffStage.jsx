import React from "react";
import NonCircuitnTech from "./NonCircuitnTech";
import CircuitTec from "./CircuitTec";
import EventButton from "./EventButton";
import { Link } from "react-router-dom";
import TrackInfo from "./TrackInfo";
import img from "../assets/symposium/overallPoster.jpg";
import "animate.css";
import OffStageEvents from "./OffStageEvents";
const OffStage = () => {
  return (
    <div>
      <TrackInfo
        label="OFF STAGE "
        Image={img}
        Description="Registration for Technovanza is now open! Secure your spot today and
            be part of an event that celebrates innovation and collaboration.
            Don’t miss the opportunity to engage with tech enthusiasts and experts."
      />

      <OffStageEvents />
      {/* <NonOffStagenTech /> */}
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSccABdnuMlfiHB0bUyGP0XUXxeLaHJuFR7ao9seUTDPlmyvjw/formResponse"
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

export default OffStage;
