import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../assets/Cultural/onstage/GroupSinging.jpg";

const GroupDance = () => {
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
          alt="GroupSinging Event"
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
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
          💥🕺🏻GROUP DANCE 
          </span>
          



        </h1>

        <section className="text-gray-300 text-justify">
          <p className="text-body lg:text-2xl">
          💐 Warm Greetings 💐
            *"ꜱᴛᴇᴘ ɪɴᴛᴏ ᴛʜᴇ ꜱᴘᴏᴛʟɪɢʜᴛ, ᴡʜᴇʀᴇ ʀʜʏᴛʜᴍ ᴍᴇᴇᴛꜱ ᴘᴀꜱꜱɪᴏɴ ᴀɴᴅ ᴅᴀɴᴄᴇ ᴍᴇᴇᴛꜱ ᴅʀᴀᴍᴀ! ᴏᴜʀ ɢʀᴏᴜᴘ ᴅᴀɴᴄᴇ ᴄᴏᴍᴘᴇᴛɪᴛɪᴏɴ ɪꜱ ᴀ ᴄᴇʟᴇʙʀᴀᴛɪᴏɴ ᴏꜰ ᴍᴏᴠᴇᴍᴇɴᴛ, ᴍᴜꜱɪᴄ, ᴀɴᴅ ᴛʜᴇ ᴜɴʙʀɪᴅʟᴇᴅ ᴇɴᴇʀɢʏ ᴏꜰ ᴏᴜʀ ᴛᴀʟᴇɴᴛᴇᴅ ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛꜱ.  ** 
            ---------------------------------
            🗓DATE: 20th March 2024     🕒TIME: 03:00 PM    📍VENUE: Open Air Auditorium
            ---------------------------------

          </p>
        </section>
        <section className="text-gray-300 text-justify">
          <h2 className="text-head lg:text-4xl font-bold mb-2 gradient-text">
            Team Size 
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>🍂👥 Team Size: max 9 students are allowed to perform.🕺 👫🎵</li>
            <li>💃 Girls and boys are not allowed to perform in the same group Dance.🕺</li>
          </ul>
        </section>
       

        {/* <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Themes for Paper Submission
          </h2>
          <p className="text-body lg:text-2xl">Participants can choose below topics but are not limited to:</p>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>Artificial Intelligence & Generative AI</li>
            <li>Quantum Computing</li>
            <li>Big Data & Data Analytics</li>
            <li>Cloud Computing</li>
            <li>Internet of Things</li>
            <li>Cyber Security & Ethical Hacking</li>
            <li>Machine Learning & Data Mining</li>
            <li>AR/VR</li>
            <li>Computer Vision</li>
            <li>Wireless Technology</li>
          </ul>
        </section> */}

        {/* <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Paper Presentation Deadlines
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Abstract Submission: 27.12.2024</li>
            <li>Notification of Acceptance: 31.12.2024</li>
            <li>Full Paper Submission: 10.01.2025</li>
            <li>Presentation Submission: 27.01.2025</li>
          </ul>
        </section> */}

        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          📜 RULES AND REGULATIONS 📜            
          </h2>
          <div>
            
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>🕺Music & Dance should not contain any vulgarity. ❌🗣</li>
              <li>🕺Harmful equipment is not allowed fire, glass, sharp equipment etc.💃 </li>
              <li>🌟 DURATION : should not exceed 6 mins.</li>
              <li>💥 SUBMISSION: 💃 Songs should be submitted before the day of the event.🕺</li>
              <li>🔥 ONSTAGE : 🕺Only shortlisted teams are allowed to perform on stage.💃</li>
              <li>⚡ JUDGES CRITERIA : 🕺 Judges decisions are final.💃</li>
              <li>🌾 Registration is mandatory for all the event participation.🕺</li>
            </ul>
            
            {/* <p>
              Submit your abstract to:{" "}
              <a
                href="https://forms.gle/srceNuGh9ZXaLNzv6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click here to submit
              </a>
            </p> */}
          </div>

          {/* <div> */}
            {/* <h3 className="text-lg md:text-xl lg:text-2xl font-semibold gradient-text">
              Full Paper Format
            </h3>
            <p className="text-body lg:text-2xl">Maximum number of pages – 6</p>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Introduction</li>
              <li>Existing Work</li>
              <li>Methodology</li>
              <li>Result (If any)</li>
              <li>Conclusion</li>
              <li>References</li>
            </ul> */}
            {/* <p className="text-body lg:text-2xl">
              Submit your full paper to:{" "}
              <a
                href="https://forms.gle/Fk7QTgXbBHrWcEZ56"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click here to submit
              </a>
            </p> */}
          {/* </div> */}

          {/* <div>
            <h3 className="text-head md:text-xl lg:text-2xl font-semibold gradient-text">
            📜 RULES AND REGULATIONS 📜            </h3>
            <p className="text-body lg:text-2xl">
                🎵 Song Selection: The lyrics must be appropriate and free from vulgarity. ❌🗣
                🎼 The song duration must not exceed 4 minutes. ⏱
                🎙 Only shortlisted teams will be allowed to perform on stage. ✅
                🚫 Equipment Restrictions: The use of fire, glass, sharp objects, or any hazardous materials is strictly prohibited. 🔥🚫🛑
                📀 Karaoke Submission: The karaoke track must be submitted at least one day before the selection process. 🎧📅
                🏆 Judging Criteria: The judges' decisions are final and binding. ⚖✅
                ✨🎵✨ Step into the spotlight, unite your voices, and create a musical masterpiece! Sign up now and let the rhythm take over! 🎶💃🔥
            </p>
            <br/> */}
            {/* <p className="text-body lg:text-2xl">For teams of two or three, only one member needs to submit the abstract.</p> */}
            {/* <p className="text-body lg:text-2xl">
              Submit your presentation to:{" "}
              <a
                href="https://forms.gle/T9GBbbq3wNWfHbSe6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click here to submit
              </a>
            </p> */}
          {/* </div> */}
        </section>

          <div>
            <h3 className="text-head md:text-xl lg:text-2xl font-semibold gradient-text">
             Registration
            </h3>
            <p className="text-body lg:text-2xl">
             Register here:{" "}
              <a
                href="https://forms.gle/Pz3g4aFGi96jEtvWA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click to Register
              </a>
            </p>
          </div>

        

        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
                🤜🤛Any queries contact✨
          </h2>
          <p className="text-body lg:text-2xl">
          Student coordinator
          <br />
            <strong> Mr. ARUN KUMAR M</strong>9344103625<br />
            <strong>Mr. BALAJI R</strong>8524066627
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default GroupDance;
