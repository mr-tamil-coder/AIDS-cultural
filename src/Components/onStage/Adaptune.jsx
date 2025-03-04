import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "./common.css";
import EventImage from "../../assets/Cultural/onstage/Adaptune.jpg";

const Adaptune = () => {
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
          alt="Adaptune Debugging Event"
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
          🎭🗣 DRAMA / MIME COMPETITION 🎭🗣
          </span>
        </h1>

        <h2>
          <span className="text-head lg:text-2xl font-bold mb-2 gradient-text">
            Description:
          </span>
        </h2>
        <p className="text-gray-300 text-body lg:text-2xl">🌟 Step Into the Spotlight! 🌟 <br />
              The stage is set, the lights are on, and the moment is yours! <br /><br />
              Jerusalem College of Engineering proudly presents the Drama / Mime Competition, a platform for expressive storytelling, powerful performances, and captivating stage presence. Gather your team, craft your narrative, and let your emotions speak louder than words!
              🗓 DATE: 21/03/25 <br /> ⏰ TIME: 11:30 AM  🏢 VENUE: OAT</p>

        {/* General Rules */}
        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          📜 RULES AND REGULATIONS 📜
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li><b>🎭 Performance Type:</b> Participants can choose to perform either a drama or a mime.</li>
            <li>
              <b>⏳ Duration:</b> The performance should be between 5 to 7 minutes (including setup and exit time). Exceeding the time limit will lead to penalties.
            </li>
            <li><b>📞 Theme & Content:</b> <br />
                - The content must be original, socially relevant, and free from any vulgarity, hate speech, or offensive elements. <br />
                - Mimes must be performed without spoken words, using only expressions and body movements. <br />
            </li>
            <li><b>🎤 Props & Costumes: </b><br />
                - Participants must bring their own costumes and props. <br />
                - The use of fire, water, glass, sharp objects, or any hazardous materials is strictly prohibited. <br />
                - Backdrops or additional setups must be simple and easy to place/remove within 1 minute.
            </li>
            <li>
              <b>📻 Sound & Music: </b><br />
              - Only instrumental or pre-recorded soundtracks are allowed. <br />
              - Music tracks must be submitted one day before the competition. <br />
              - Live dialogues are allowed in dramas but not in mimes.
            </li>
            <li><b>🏆 Judging Criteria: </b><br />
                ⚖ The judges' decision will be final. <br />
                🎭🗣 Unleash your emotions, captivate the audience, and bring your story to life on stage! <br />
            </li>
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

export default Adaptune;
