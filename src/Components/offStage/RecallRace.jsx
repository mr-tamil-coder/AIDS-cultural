import React from "react";
import { motion } from "framer-motion";
import "./common.css";
import RecallRaceImg from "../../assets/Cultural/offstage/TheRecallRace.jpg"
import { useRef, useEffect } from "react";
const RecallRace = () => {
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
      {/* Left: Event Details */}
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={RecallRaceImg}
          alt="Batallia de Robots"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-3/4 w-full text-white flex flex-col gap-6 bg-transparent  overflow-auto custom-scrollbar p-4 rounded-lg shadow-lg"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          🧠
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            THE RECALL RACE
            </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
          Warm Greetings ⚡Unleash your inner genius! Jerusalem College of Engineering's " The Recall Race " is an exciting journey of discovery,
           filled with brain-teasing riddles,complex connections, and memory-testing challenges

          </p>
          <p>
            This event tests knowledge, teamwork, and quick thinking, making it
            an engaging and exciting challenge for all participants.
          </p>
        </section>

        {/* <section className="text-gray-300">
          <h2>
            📅
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              Event Details:
            </span>
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>
              📍 <strong>Venue:</strong> JCE LAB 31
            </li>
            <li>
              🗓️ <strong>Date:</strong> 15/02/2025
            </li>
            <li>
              ⏰ <strong>Time:</strong> 11 AM to 3 PM
            </li>
            <li>
              👥 <strong>Team Size:</strong> 3-5 members
            </li>
          </ul>
        </section> */}

        <section className="text-gray-300">
          <h2>
            🛠️
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            📝 RULES AND REGULATIONS
            </span>
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <p>➡ Team Size: 2 members per team</p>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2>
            🚦
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              Round Details:
            </span>
          </h2>

          <h3 className="font-semibold mt-4 text-body lg:text-2xl">
            Round 1
          </h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <p>💎Sets of an images will be projected onto a screen </p>
             <p>💎Teams must remember the order of the image and then  write to the paper by correct order</p>
          </ul>

          <h3 className="font-semibold mt-4 text-body lg:text-2xl">
            Round 2
          </h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <p>💎Sets of an images will be projected onto a screen </p>
            <p>💎Set of Teams will be participated and Teams are instructed to remember the objects. </p>
            <p>💎Each teams need to tell one object .If any team fails to tell the object then it will be disqualified</p>
          </ul>
        </section>
          <section className="text-gray-300">
          <h2>
            📞
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              Enquiry and Contact Details:
            </span>
          </h2>
          <p className="mt-4 lg:text-2xl">
          Ms.Reshma.E (+91 91765 00781)<br></br>
          Ms.Harini.S (+ 91 81488 37923) 

          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default RecallRace;
