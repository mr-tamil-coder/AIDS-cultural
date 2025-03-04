import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import BGMIImage from "../../../assets/symposium/BGMI_FINAL.jpg";
import "./MysteryVault.css";

const BGMI = () => {
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
          src={BGMIImage}
          alt="BGMI Tournament"
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
          KAVITHAI
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
          📜 கவிதைப் போட்டி – "புன்னகையும் அதன் ரகசியமும்" 📜  
          ✨ உங்கள் வார்த்தைகள் புன்னகையின் ஆழத்தைக் கண்டறியட்டும்! ✨  <br/>
          📅 நாள்: 12/03/25  <br/>
          📂 முறை: ஆன்லைன் (Online Submission)  <br/>
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          📜 விதிமுறைகள்: 
          </h2>
          <p className="list-disc list-inside mt-4 text-body lg:text-2xl">
          🖋 தீம்: "புன்னகையும் அதன் ரகசியமும்"<br/>
          📖 மொழி: தமிழ் மட்டும்  <br/>
          ✍ நீளம்: 8 - 10 வரிகள்  <br/>
          📄 பதிவிறக்கம்: PDF/DOC ([பெயர்_கவிதை].pdf**)  <br/>
          📩 அனுப்ப வேண்டிய மின்னஞ்சல்: excelsior@jerusalemengg.ac.in  <br/>
          🛑 Plagiarism மற்றும் அசிங்கமான உள்ளடக்கம் அனுமதி இல்லை<br/>

          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          🎖 மதிப்பீட்டு அடிப்படைகள்:  
          </h2>

          
          <p className="mt-4 text-body lg:text-2xl">
            - கருப்பொருளுடன் தொடர்பு  <br/>
            - படைப்பாற்றல் & உணர்வுப்பூர்வம்  <br/>
            - வார்த்தைகளின் அழகு  <br/>
          </p>
        </section>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
        📞 ஒருங்கிணைப்பாளர்கள்:
        </h2>
          <p>
          <strong>📍 சிவராம் S–</strong> 7598704942  <br/>
          <strong>📍 ம்ரிதுலா R –</strong> 730597478

          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default BGMI;
