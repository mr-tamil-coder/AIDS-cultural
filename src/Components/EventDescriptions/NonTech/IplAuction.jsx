import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/iplauction.jpg"; 
// import "./IPL.css";

const IPL = () => {
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
          alt="IPL Auction"
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
          ✨
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
          MEMES 
          </span>
        </h1>

        <section className="text-gray-300 text-justify">
          <p>
          ✨ Greetings from JCE -
          Excelsior 2025✨<br/>
          Are you ready to unleash your creativity and bring smiles to life? 
          🤩Join our Meme Creation Competition and showcase your wit, humor, and meme-making skills!<br/>
          ⚡Memes creation competition⚡ 


            </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          INSTRUCTIONS:
          </h2>
          <p>
           <strong>Rules and regulations:</strong> 
            ✨All memes must be original content created by participants.<br/>
            ✨ Memes must be the form  of an image.<br/>
            ✨ Memes should not promote hate speech, violence or discrimination.<br/>
            ✨ Participants must  submit their memes before 12.03.25 .<br/>
            ✨ Judging criteria is based on creativity and originality of the meme.<br/>
            ✨ The Judge's decision is  final and binding.
</p>
          
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          For any queries: 
          </h2>Student coordinator :<br/>
           <strong>Swetha P</strong>:7904449070<br/>
           <strong>Rashmi shivakumar</strong>: 



          
        </section>

       
      </motion.div>
    </div>
  );
};

export default IPL;
