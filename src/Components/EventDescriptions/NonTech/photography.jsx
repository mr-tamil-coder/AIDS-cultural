import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import MysteryImage from "../../../assets/symposium/deadly.png";
import "./MysteryVault.css";

const DeadlyDeeds = () => {
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
          src={MysteryImage}
          alt="Deadly Deeds"
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
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
          PHOTOGRAPHY
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
          GREETING FROM JCE - EXCELSIOR'25 PRELIMS✨ <br/> <br/>
The Jerusalem College of Engineering along with the student Council, 
Proudly presents the <br/> <br/>
📸 PHOTOGRAPHY 📸 <br/> <br/>
(An online event)  <br/>
Contest Theme: SECRETS BEHIND THE SMILE  <br/>
Last Date for submission: March 12, 2025 
          </p>
         
        </section>

        <section className="text-gray-300">
        <h2>📜<span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
             Rules and Regulations:
          </span></h2> {/*


*/}
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>🤳🏻 Participants have to submit only one Photograph each.</li>
            <li>🤳🏻 Photographs should be your original artwork in JPEG/JPG format. In case of any dispute, you may be asked to submit RAW/Original file of the entry photograph.</li>
            <li>🤳🏻 Submission will not be accepted once the deadline lapses.</li>
            <li>🤳🏻 Violation of contest rules disqualification of the contestant.</li>
            <li>🤳🏻 Only basic editing allowed (Such as cropping, Black and White Contrast change).</li>
            <li>🤳🏻 There must not be any border, logo(s), copyright marks.</li>
            <li>🤳🏻 Results will be declared by judges and up. </li>
          </ul>
        </section> {/*Registration link:  https://forms.gle/yuQqDtBGEHNPuMA89 */}
        

        <section className="text-gray-300">
          <h2>🔍
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
             Event Flow:
          </span></h2>
          <ol className="list-decimal list-inside mt-4 text-body lg:text-2xl">
            <li>Introduction and character briefing.</li>
            <li>Detectives start hunting for clues and begin the investigation.</li>
            <li>Detectives question suspects and verify alibis.</li>
            <li>Detectives make a final accusation and present their theories.</li>
            <li>The host reveals the real culprit and explains how the clues led to the identification of the murderer.</li>
          </ol>
        </section>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>🔎 Are you ready to uncover the truth and solve the mystery?</p>
          <p>
            Step into the role of a detective, analyze every clue, and experience the thrill of solving a crime!
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default DeadlyDeeds;
