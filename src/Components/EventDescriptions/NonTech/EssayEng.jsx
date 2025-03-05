import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EssayEngImage from "../../../assets/Cultural/online/EssayEnglish.jpg";
// import "./EssayEng.css";

const EssayEng = () => {
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
          src={EssayEngImage}
          alt="Essay Competition"
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
            ESSAY COMPETITION
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            <strong>📝✍ Pen down your thoughts and let your ideas take the spotlight! ✍📝</strong>
            <br />
            ✨ Jerusalem College of Engineering presents the Essay Competition, where creativity meets critical thinking. 🖋📖 Showcase your writing skills and express your views on thought-provoking topics.
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Theme:
          </h2>
          <p className="text-body lg:text-2xl">
            <strong>"Ink of Dreams – ✒ A Pen is Mightier than a Sword ⚔✨"</strong>
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Rules & Regulations:
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>The content of your essay must be a sensible one.</li>
            <li>The essay must not exceed the maximum word limit of 150.</li>
            <li>The judge's decision will be final.</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Submission Deadline:
          </h2>
          <p className="text-body lg:text-2xl">
            Last date for submission: <strong>13/03/2025</strong>
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            For Queries:
          </h2>
          <p className="text-body lg:text-2xl">
            Contact: <br />
            <strong>Mr. Haumrish VS:</strong> +91 9940534223
            <br />
            <strong>Ms. Pewina Francy:</strong> +91 6385109314
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default EssayEng;