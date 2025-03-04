import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import FreeFireImage from "../../../assets/symposium/NewFreeFire.jpg";
import "./MysteryVault.css";

const FreeFire = () => {
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
          src={FreeFireImage}
          alt="Free Fire Event"
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
            ESSAY(TAMIL)
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
          Greetings from JCE ✨ EXCELSIOR'2k25  ✨<br/>
          "அறிவுள்ளம் மனிதன் எழுதும் கட்டுரைகள் மாற்றுகளை உருவாக்கும்."<br/>
          The  Jerusalem college of Engineering along with TAMIL MANDRAM proudly 
          presents the <br/>
          💫 தமிழ் கட்டுரை எழுதுதல் 💫<br/><br/>
          தலைப்பு :கனவுகளின் மை

          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          விதிகள் மற்றும் ஒழுங்குமுறைகள்:- 
          </h2>
          <p className="list-disc list-inside mt-4 text-body lg:text-2xl">
          ✨மேற்கண்ட தலைபை மையமாகக் கொண்டு உங்கள் கட்டுரையை தட்டச்சு( அல்லது )எழுதி அனுப்பவும்.<br/>
          ✨உங்கள் கட்டுரை 250 - 300 வார்த்தைகளுக்கு மிகாமல் இருக்க வேண்டும்.<br/>
          ✨சமர்ப்பிப்பதற்கான கடைசி தேதி : 17.03.2025<br/>
          ⭐முதல் மற்றும் இரண்டாவது இடத்திற்காக தேர்வு செய்யப்படும்  கட்டுரைகள் பரிசுகள் வழங்கப்படும்.<br/>
          ⭐நடுவர்களின் முடிவே இறுதியானது<br/><br/>
          </p>
        </section>
        
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          Any queries contact -
          </h2>
          <ul className="list-none mt-4 text-body lg:text-2xl">
            <li>📞 <strong>Abarna P </strong> 6379281262</li>
            <li>📞 <strong>Prathyusha :</strong> 98405 41522</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default FreeFire;
