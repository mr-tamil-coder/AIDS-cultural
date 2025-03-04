import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/Cinephilia.jpg";
import "./MysteryVault.css";

const Ciniphilia = () => {
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
          alt="Short Film  Contest"
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
          🎬📽 SHORT FILM CONTEST 🎬📽
          </span>
        </h1>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
          <strong>🌟 Lights, Camera, Action! 🌟</strong><br></br>
          Cinema has the power to inspire, entertain, and provoke thought. Now, it's your turn to bring stories to life!
          Jerusalem College of Engineering proudly presents <strong>The Short Film Contest</strong>—an opportunity for budding filmmakers to showcase their creativity,
          storytelling, and cinematic skills. Gather your team, script your vision, and let the reel roll!<br></br>
          🗓 DATE: 12/03/25<br></br>  
          📂 MODE: Online Submission

          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          📚 RULES AND REGULATIONS 📚
          </h2>
          <p>
          <strong>🎬 Theme & Content: The secrets behind the smile</strong><br></br>
          The short film must be original, appropriate, and free from any vulgarity, hate speech, or offensive content. ❌<br></br><br></br>
          <strong>⏳Duration:</strong>The short film should be between 5 to 6 minutes, including the credits.<br></br><br></br>
          <strong>📹 Format & Submission:</strong>
          Films must be submitted in MP4 DOC format with a minimum resolution of 720p.<br></br><br></br>
          The file name should be in the format: [TeamName_FilmTitle].mp4<br></br><br></br>
          <strong>Submission deadline:</strong> 12th March 2025<br></br><br></br>
          <strong>Submission Mail ID:</strong> excelsior@jerusalemengg.ac.in<br></br><br></br>
          <strong>🎥 Technical Guidelines:</strong>
          Subtitles are encouraged but not mandatory.<br/><br/>
         <strong>🔥Restrictions:</strong>  The use of fire, hazardous materials, or content that promotes violence, discrimination, or political agendas is strictly prohibited.
          </p>
        </section>

       

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          ⚖ Judging Criteria:


          </h2>
          <p className="text-body lg:text-2xl">
            The judges' decisions are final and binding.
          </p>
        </section>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
          🎬📽 Unleash your imagination, bring your stories to life, and let the world witness your cinematic brilliance!
          </p>
        </section>
        {/* Enquiry Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            For Enquiry:
          </h2>
          <p className="text-body lg:text-2xl">
            Contact: <br />
            <strong>Sai Vikram V </strong> 9043962216<br></br>
            <strong>Mohammad Haq Noorul</strong>7708810011
            <br />
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Ciniphilia;
