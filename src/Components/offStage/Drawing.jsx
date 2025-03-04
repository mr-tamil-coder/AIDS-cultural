import React, { useEffect, useRef } from "react"; 
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../assets/Cultural/offstage/FirelessCookery.jpg"; // Replace with your actual image
import "./common.css";

const Drawing = () => {
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
          alt="Eloquence Event"
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
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">🍽🔥FIRELESS COOKING COMPETITION🔥🍽  </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
          Unleash your inner chef and create mouthwatering dishes—without fire! 🌟✨<strong>Jerusalem College of Engineering</strong> presents the <strong>Fireless</strong> Cooking Competition, a fun and innovative event where creativity meets taste. 
          </p>
          <p>
          🍉🥗 Assemble, blend, and plate your way to victory using only raw ingredients. Gather your team and let your culinary skills shine! 🍛🎨🔥
          </p>
          
        </section>
        <section className="text-gray-300">
          <h2>🛠️ 
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              📅Event Details:
          </span></h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li><strong>Date:</strong> 20/03/25 📅</li>
            <li><strong>Time:</strong> 10:30-11:30 PM⏰</li>
            <li><strong>Venue:</strong>  Seminar Hall-3rd Floor🏡</li>
            
          </ul>
        </section> 

        {/* Rules and Regulations Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">Rules and Regulations</h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li><strong>👥Team Size:</strong> Each team must have 2 members. 👩‍🍳👨‍🍳.</li>
            <li><strong>📢Eligibility:</strong> The competition is open to all students. 💡⚡</li>
            <li><strong>🥣Dish Preparation:</strong> Only fireless cooking methods (chopping, blending, assembling, etc.) are allowed. 🔪🍓</li>
            <li><strong>⏳Time Limit:</strong> Participants will get 40 minutes to prepare their dish. ⏱</li>
            <li><strong>📝Ingredients: </strong> Participants must bring their own ingredients. Only pre-approved ingredients are allowed. 🍲✨</li>
            <li><strong>🚫Prohibited Items:</strong> The use of electrical appliances such as induction stoves, ovens, or heaters is not allowed. ❌⚡</li>
            <li><strong>🍛Presentation: </strong> The dish should be well-plated, with a name and a short explanation of its health benefits. 🎨✨</li>
            <li><strong>🏆Judging Criteria: </strong> Taste, Creativity, Presentation, and Health Factor. The judge’s decisions are final and binding. ✅⚖</li>
          </ul>
        
        </section>
        
       

          <section className="text-gray-300 text-justify text-body lg:text-2xl">
            <p>✨🍓🥗 Showcase your culinary skills, think outside the stove, and let your dish steal the show! Sign up now and be a part of this exciting event! 🎉🔥</p>
            <p>Sign up now and cook up a masterpiece! 👩‍🍳👨‍🍳</p></section>

          <section className="text-gray-300">
          <h2>
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          Student Coordinators:
          </span></h2>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Dhanvanth Gandhi G, iii Year ( 9790731555 )📞</li>
            <li> Ms.Sharon Zacharia, ii Year (9894023966)📞</li>
          </ul></section>



      </motion.div>
    </div>
  );
};

export default Drawing;
