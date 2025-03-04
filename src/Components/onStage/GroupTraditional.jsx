import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../assets/Cultural/onstage/TraditionalEthinicWear.jpg";
import "./common.css";

const GroupTraditional = () => {
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
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10">
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
          alt="GroupTraditional Event"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-3/4 w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          💡✨
          <span className="text-head lg:text-3xl font-bold mb-4 text-center lg:text-left gradient-text">
            ⚜️GROUP TRADITIONAL ETHNIC WEAR ⚜️
          </span>
        </h1>
        <h2>
          <span className="text-head lg:text-2xl font-bold mb-4 text-center lg:text-left gradient-text">
            Description:
       </span>
       <h3> 
              With great pride, we cordially invite you to a day of creativity
              ✨ EXCELSIOR 2025! ✨
              Step into India’s rich cultural heritage with the Traditional Ethnic Wear Group Ramp Walk! 
              Join us in this vibrant celebration where every step tells a story of culture, elegance, and heritage! <br /><br />
              🗒Event Name: Traditional  Ethnic Wear <br />
              🗓Date: 20.03.2025 <br />
              📍Venue: Open Air Auditorium <br />
              ⏰Time: 1.30 to 2.30 <br />
            </h3>
       </h2>


           


       <span>
        <h2  className="text-head lg:text-2xl font-bold mb-4 text-center lg:text-left gradient-text">Team Size:</h2>
        <p  className="text-gray-300 text-justify text-body lg:text-2xl">📌 Each team can have a maximum of 5 members.
        </p>
        </span>
      
        


        <section  className="text-head lg:text-2xl font-bold mb-4 text-center lg:text-left gradient-text">
          <h2> 📜 Rules and regulations 📜</h2>
          </section>
          <ul  className="text-gray-300 text-justify text-body lg:text-2xl">
            <li>
            </li>
            <li>
            📌 Teams must choose one Indian cultural or religious theme and stick to it.
            </li>
            <li>
              📌 Outfits should be traditional, culturally appropriate, and respectful of Indian heritage.
            </li>
            <li>
              📌 Total time for each group is 30 seconds to 45 seconds and should not exceed 45 minutes. 
            </li>
            <li>
              📌 Background music or karaoke must be submitted 5 days before the event in the required format.
            </li>
            <li>
            📌 The ramp walk should be graceful, synchronized, and theme-aligned.
            </li>
            <li>
            📌 Props and accessories are allowed but should not obstruct movement or pose a safety risk.
            </li>
            <li>
            📌 Teams must report on time for rehearsals and the main event.
            </li>
            <li>
            📌 Maintain decorum, respect all cultures, and avoid offensive gestures.
            </li>
            <li>
            📌 Judging will be based on authenticity, confidence, creativity, and overall presentation.
            </li>
          </ul>
       
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 gradient-text">
          STUDENT COORDNATORS:
          </h2>
          <p className="text-body lg:text-2xl">
            <strong>Ms.MIRUTHULA A ,IV year</strong> <br />
            <strong> Mr.MADESH S,II year:</strong> 6380069316
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default GroupTraditional;
