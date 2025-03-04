import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "./common.css";
import EventImage from "../../assets/Cultural/onstage/DumbCharades.jpg";

const DumCharades = () => {
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
          alt="DumCharades Debugging Event"
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
          🗣 DUMCHARADES 🗣
          </span>
        </h1>

        <h2>
          <span className="text-head lg:text-2xl font-bold mb-2 gradient-text">
            Description:
          </span>
        </h2>
        <p className="text-gray-300 text-body lg:text-2xl">
          <ul>
            <li>🌟 EXCELSIOR 2K25 🌟</li>
            <li>🎭 Inter-Collegiate Cultural Fest 🎭</li>
            <li>✨ ON-STAGE EVENT: DUMCHARADES ✨</li>
            <li>📍 Venue: Auditorium</li>
            <li>⏰ Time: 10:30 AM – 11:30 AM</li>
            <li>📅 Date: 20/03/2025</li>
          </ul>
        </p>


        {/* General Rules */}
        <section className="text-gray-300">
        <h2 className="text-head md:text-2xl lg:text-2xl font-bold mb-2 gradient-text">
        Outline:
          </h2>
          <p>
            <ul className="list-inside text-body lg:text-2xl">
              <li>⭐ Each team/player will be given a word or phrase.</li>
              <li>⭐ They must act it out without speaking, while their teammate guesses.</li>
              <li>⭐ Audience participation in guessing is not allowed.</li>
              <li>⭐ Points will be awarded for each correct guess.</li>
            </ul>
          </p>
          <br />
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          📜 RULES AND REGULATIONS 📜
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>🌟 Two members per team is mandatory.</li>
            <li>⏳ The maximum time per team is 1 minute.</li>
            <li>🏆 The team with the highest points at the end WINS!</li>
            <li>🚫 No sounds allowed—humming, lip-syncing, or verbal communication is prohibited.</li>
            <li>💃 Only body language & facial expressions can be used!</li>
            <li>⚖ Judges' decision will be final.</li>
          </ul>
        </section>


          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-4 gradient-text">
          👥 Team Size:
          </h3>
          <ul className="list-disc list-inside text-body lg:text-2xl">
          🌟 Two members per team is mandatory.
          </ul>


        {/* Contact Details */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 gradient-text">
          Event Coordinator:
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <b>Shrinidhi AR-II MBA:</b>9344658789   
            </li>
          </ul>
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 gradient-text">
          Faculty Coordinator:
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <b>Dr.S.Muthumani</b>  
            </li>
            <li>
              <b>Ms.S.Sivakanni</b>  
            </li>
            <li>
              <b>MBA Department</b>  
            </li>
          </ul>
         
        </section>
      </motion.div>
    </div>
  );
};

export default DumCharades;
