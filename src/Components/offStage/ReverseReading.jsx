import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import reverseReading from "../../assets/Cultural/offstage/ReverseReading.jpg";
import "./common.css";

const ReverseReading = () => {
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
          src={reverseReading}
          alt="ReverseReading de Robots"
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
        📖
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
          Reverse Reading Event 
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
          Warm Greetings! 🌟 by <strong>Jerusalem College of Engineering</strong>  
          </p>
          <p>
          Get ready to flip your reading skills upside down and challenge your minds! 🤯
          </p>
          <p>
          We are happy presents<strong> Reverse Reading</strong> ✨, a unique platform to showcase your reading skills in reverse! 🔙
          </p>
          <p>Get ready🤓 to read between the lines... in reverse! 📚</p>
        </section>

         <section className="text-gray-300">
          <h2>🛠️ 
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              📅Event Details:
          </span></h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li><strong>Date:</strong> 20/03/25 📅</li>
            <li><strong>Time:</strong> 11:30 AM - 1:00PM ⏰</li>
            <li><strong>Venue:</strong> M204 / M206🏡</li>
            
          </ul>
        </section> 

        <section className="text-gray-300">
          <h2>
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          Reading Guidelines:
          </span></h2>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Round 1 :</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Fun cine quiz  will be given which contains reversed options ⬅.Correct option should be selected from the given reversed options. </li>
          </ul>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Round 2 :</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li> Read the displayed reversed sentence or word ⬅ in correct order➡,at the given time⏱</li>
            <li> judges decisions are final💟</li>
          </ul>
          
          
        </section>
        <section className="text-gray-300">
          <h2>
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          Student Coordinators:
          </span></h2>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Divya Lakshmi S-  87781 09278📞</li>
            <li>Pranav Ramana PA -  9444425914 📞</li>
          </ul>

          <h2>
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          Faculty Coordinators :
          </span></h2>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Dr.R.BALARAMAN (HOD) -80128 83113📞</li>
            <li>Ms.S.RUDHRA (Asst. Professor) -94420 69459 📞</li>
          </ul> </section>
           
          <section className="text-gray-300 text-justify text-body lg:text-2xl">
            <p>Step into the world of reverse reading, challenge your minds, and win exciting prizes! 🎁</p>
            <p>Sign up now and get ready to read in reverse! 🔙📖</p></section>
        
      </motion.div>
    </div>
  );
};

export default ReverseReading;
