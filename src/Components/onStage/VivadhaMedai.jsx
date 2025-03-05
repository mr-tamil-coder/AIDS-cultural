import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "./common.css";
import EventImage from "../../assets/Cultural/onstage/VivathaMedai.jpg";

const VivadhaMedai = () => {
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
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10 text-justify">
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
          alt="Vivadha Medai Event"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-[80%] w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          ✨
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            📝✍ தமிழ் விவாதம் - விவாத மேடை ✍📝
          </span>
        </h1>

        <h2>
          <span className="text-head lg:text-2xl font-bold mb-2 gradient-text">
            Description:
          </span>
        </h2>
        <p className="text-gray-300 text-body lg:text-2xl">
          🌟 ஜெருசலேம் பொறியியல் கல்லூரியில் 💫 நடைபெறும் தமிழ் விவாதம் 💥 என்பது மாணவர்கள் கொடுக்கப்பட்ட தலைப்பில் தங்கள் கருத்துக்களை கட்டமைக்கப்பட்ட முறையில் விவாதிக்கவும், தங்களுக்கு சாதகமாக உரையாடவும் ஒரு மேடையாகும்.💖 இந்த நிகழ்வு மாணவர்களின் நுண்ணறிவு சிந்தனை, பொதுநடை உரை, மற்றும் தர்க்கரீதியான மனப்பாங்கை மேம்படுத்துகிறது.💖
        </p>

        <h3 className="text-gray-300 text-lg md:text-xl lg:text-2xl font-bold mt-4 gradient-text">
          📌 தலைப்பு: "முகாமில் காணப்படும் மையப் பிரச்சினை."
        </h3>

        {/* Rules */}
        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            📜 நியமங்கள் 📜
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>முதல் சுற்றில் இருந்து இரு குழுக்கள் இரண்டாவது சுற்றுக்கு தகுதி பெறுவர்.</li>
            <li>ஒவ்வொரு உறுப்பினருக்கும் அதிகபட்சமாக நேரம் ஒதுக்கப்படும்.</li>
            <li>பதிலளிப்பு சுற்றுக்கு ஒரு நிமிடம் ஒதுக்கப்படும்.</li>
            <li>தமிழ் மொழியில் மட்டுமே பேச வேண்டும்.</li>
            <li>நடுவர்களின் முடிவே இறுதி முடிவாகும்.</li>
            <li>பங்கேற்பாளர்கள் பதிவு இணைப்பை பூர்த்தி செய்ய வேண்டும்.</li>
            <li>இடத்தில் நேரடி பதிவுகள் அனுமதிக்கப்படாது.</li>
            <li>தகாத வார்த்தைகளை தவிர்த்திட வேண்டும்.</li>
          </ul>
        </section>

        {/* Contact Details */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            தொடர்பு கொள்ள:
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <b>திரு. சூர்யா எஸ்: </b>+91 80724 06199
            </li>
            <li>
              <b>திரு. தேவேஷ் குமார் எம்: </b>+91 82488 39401
            </li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default VivadhaMedai;
