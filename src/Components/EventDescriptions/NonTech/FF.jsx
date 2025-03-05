import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import KatturaiImage from "../../../assets/Cultural/online/EssayTamil.jpg";
import "./MysteryVault.css";

const Katturai = () => {
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
          src={KatturaiImage}
          alt="Tamil Essay Competition"
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
          💫 தமிழ் கட்டுரை எழுதுதல் 💫
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            <strong>"அறிவுள்ளம் மனிதன் எழுதும் கட்டுரைகள் மாற்றுகளை உருவாக்கும்."</strong>
            <br />
            The Jerusalem College of Engineering, along with Tamil Mandram, proudly presents a Tamil Essay Writing Competition.
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            தலைப்பு:
          </h2>
          <p className="mt-2 text-lg lg:text-xl font-semibold">"கனவுகளின் மை"</p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            விதிகள் மற்றும் ஒழுங்குமுறைகள்:
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li> உங்கள் கட்டுரை 250 - 300 வார்த்தைகளுக்குள் இருக்க வேண்டும்.</li>
            <li> கட்டுரையை தட்டச்சு (அல்லது) எழுதி அனுப்பலாம்.</li>
            <li> கடைசி தேதி: <strong>17.03.2025</strong></li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            பரிசுகள்:
          </h2>
          <p>முதல் மற்றும் இரண்டாவது இடத்திற்கான பரிசுகள் வழங்கப்படும்.</p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            பதிவுசெய்ய:
          </h2>
          <p>Mail your essay to: <strong>excelsior@jerusalemengg.ac.in</strong></p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            தொடர்புக்கு:
          </h2>
          <ul className="list-none mt-4 text-body lg:text-2xl">
            <li>📞 <strong>Abarna P:</strong> 6379281262 (AIML - 3rd year)</li>
            <li>📞 <strong>Prathyusha:</strong> 98405 41522 (CSE - 1st year)</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default Katturai;
