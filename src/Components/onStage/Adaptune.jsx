import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "./common.css";
import EventImage from "../../assets/Cultural/onstage/Adaptune.jpg";

const Adaptune = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10 text-justify">
      {/* Left: Event Image */}
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={EventImage}
          alt="Adaptune Debugging Event"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-[80%] w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
        ✨
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
          💃🏼🎶ADAPTUNE🕺🏼🎼
          </span>
        </h1>

        <p className="text-gray-300 text-body lg:text-2xl">
          <strong>💃🏼🎶ADAPTUNE COMPETITION 🕺🏼🎼</strong><br /><br />
          ⚡Greetings from<strong> Jerusalem College of Engineering⚡*</strong><br />
          Get ready to mesmerize ✨the audience with your dancing🕺 talent ✨
          we are proud presents Adaptune🌟, a platform to showcase your harmony, passion, and stage presence💫
         
        </p>
        <span className="text-head md:text-3xl lg:text-2.5xl font-bold mb-2 gradient-text">
          Event Details
        </span>
        <ul className="list-inside text-body lg:text-2xl">
          <li>Date: 20/03/25 🔮</li>
          <li>Time: 12:30PM - 1:30PM ⏰</li> 
          <li>Venue:  Auditorium 🏟</li>
        </ul>
        {/* General Rules */}
        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          📜 RULES AND REGULATIONS 📜
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Music will be played for which the participants has to dance on the spot.</li>
            <li>Maximum duration of music is 3 minutes.</li>
            <li>Avoid vulgar moves or actions on the stage </li>
            <li>Participants performance will be evaluated based on their expressions, moves with the ongoing rhythm.</li>
            <li>Judges’ decisions are final...💯</li>
          </ul>
        </section>

        {/* Round 2 */}
        <section className="text-gray-300">

          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-4 gradient-text">
          👥 Team Size:
          </h3>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            Event involves solo performance only.
          </ul>

        </section>

        {/* Contact Details */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-2.5xl font-bold mb-2 gradient-text">
          Event Coordinators

         </h2>
          <ul className="list-disc list-inside">
            <li>
              <b>Amirthaa R/III/AI&ML: </b>8939612654
            </li>
            <li>
              <b> Andrina Kjohn/ii/Ai&Ml: </b>6385618807
            </li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default Adaptune;
