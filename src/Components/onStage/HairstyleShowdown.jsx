import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "./common.css";
import EventImage from "../../assets/Cultural/onstage/HairstyleShow.jpg";

const HairstyleShowdown = () => {
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
          alt="VivadhaMedai Debugging Event"
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
          🎭✨ HAIRSTYLE SHOWDOWN ✨💇‍♂💇‍♀
          </span>
        </h1>
        7.	HAIRSTYLE SHOWDOWN 
DESCRIPTION:

INSTRUCTIONS :
📜 RULES AND REGULATIONS 📜
STUDENT COORDINATORS:
💫 Sudharsan (3rd Year CS) -📞 75502 77296
💫 Abinesh (2nd Year CS) - 📞 882563974

        <p className="text-gray-300 text-body lg:text-2xl">
          🌟 Greetings, Style Enthusiasts! 🌟
          Get ready to unleash your creativity and showcase your hairstyling talent! 🎨✂ Jerusalem College of Engineering presents the Hairstyle Showdown—a platform to flaunt your innovation, precision, and artistic flair. Gather your tools and let your styling skills steal the show! 💇‍♀🔥
          📅 DATE: 20/03/25⏰ TIME: 1:30 PM to 3:00 PM  ,VENUE: Auditorium
        </p>

        {/* General Rules */}
        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          📜 RULES AND REGULATIONS 📜
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>✂ Theme: Hairstyles must be creative, elegant, and appropriate. ❌🚫 No offensive designs.</li>
            <li>👥 Team Size: Only two participants per team. ✌💇‍♀</li>
            <li>🎭 Category: Open for women’s hairstyling. 👧✨</li>
            <li>⏳ Time Limit: ⏱ Participants will have 30 minutes to complete their hairstyle.</li>
            <li>🛑 Restrictions:  ⚠ The use of fire, glass, or any hazardous materials is strictly prohibited. 🚫🔥</li>
            <li>🎒 Materials: Participants must bring their own styling tools and accessories. Our team will not provide any materials like clips, rubber bands, Comb etc. 🎀✂❌</li>
            <li>🏆 Judging Criteria: Creativity, technique, and overall presentation. The judges' decisions are final and binding. 🏅✅</li>
            <li>✨💇‍♀✨ Step into the spotlight, transform your vision into reality, and let your hairstyling skills shine! Register now and be part of the ultimate Hairstyle Showdown! 💇‍♀💃🔥</li> 
          </ul>
        </section>

        {/* Round 2 */}
        <section className="text-gray-300">

          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-4 gradient-text">
          👥 Team Size:
          </h3>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            Each team can have 7 to 9 members including actors and backstage crew
          </ul>

        </section>

        {/* Contact Details */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          STUDENT COORDINATORS:
         </h2>
          <ul className="list-disc list-inside">
            <li>
              <b>Mahendra U: </b>9840673391
            </li>
            <li>
              <b>  Aliah Ridha A: </b>7845895974
            </li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default HairstyleShowdown;
