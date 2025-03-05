import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/Cultural/online/MemeCompetition.jpg";

const MemeCompetition = () => {
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
          alt="Meme Competition"
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
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
          ✨ Greetings from JCE Excelsior 2025 ✨
        </h1>

        <section className="text-gray-300 text-justify">
          <p>
            Are you ready to unleash your creativity and bring smiles to life? 🤩
            Join our Meme Creation Competition and showcase your wit, humor, and meme-making skills!
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            ⚡ Meme Creation Competition ⚡
          </h2>
          <p className="text-lg font-semibold">Theme: 🎭 Secrets Behind the Smile 🎭</p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl font-bold mb-2">Instructions:</h2>
          <ul className="list-disc list-inside mt-4">
            <li>✨ All memes must be original content created by participants.</li>
            <li>✨ Memes must be in the form of an image.</li>
            <li>✨ Memes should not promote hate speech, violence, or discrimination.</li>
            <li>✨ Participants must submit their memes before 12.03.25.</li>
            <li>✨ Judging criteria is based on creativity and originality of the meme.</li>
            <li>✨ The judge's decision is final and binding.</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl font-bold mb-2">Submission & Queries:</h2>
          <p>📧 Mail your meme to: <strong>excelsior@jerusalemengg.ac.in</strong></p>
          <p>📞 For any queries, contact:</p>
          <ul className="list-disc list-inside">
            <li>Swetha P (CS - III Year) - 7904449070</li>
            <li>Rashmi Shivakumar (CS - II Year)</li>
          </ul>
        </section>

        <p className="text-lg font-semibold text-center">Regards, <br /> JCE</p>
      </motion.div>
    </div>
  );
};

export default MemeCompetition;
