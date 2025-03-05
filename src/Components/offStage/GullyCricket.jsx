import React, { useEffect, useRef } from "react"; 
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../assets/Cultural/offstage/GullyCricket.jpg"; // Replace with your actual image
import "./common.css";

const GullyCricket = () => {
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
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text"> GULLY CRICKET  </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
         <strong>✨ Excelsior_2k25 warm greetings </strong> The Jerusalem college of engineering along with the students council, proudly presents the
          GULLY CRICKET 🏏<br></br>
          <br></br>
          <strong>Date: 20 March 2025</strong>
           </p>
        </section>
        {/* <section className="text-gray-300">
          <h2>🛠️ 
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              📅Event Details:
          </span></h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li><strong>Date:</strong> 20 March 2025 📅</li>
            
          </ul>
        </section>  */}

        {/* Rules and Regulations Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">Rules and Regulations</h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <p>✨  Each team should have only 3 members.</p>
            <p>✨Each team will be allowed to play for 2 overs.</p>
            <p>✨The ball should pitch once on the ground when the bowler bowls.</p>
            <p>✨The ball should pitch at least once on the ground and hit the boundary, then it will be considered 1 point.</p>
            <p>✨If the bowling team catches the ball, then the batsman will be out.</p>
            <p>✨ Umpire's decision will be final.</p>
          </ul>
        
        </section>
          <section className="text-gray-300">
          <h2>
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
          Student Coordinators:
          </span></h2>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Mr.Lokesh Y- (7448879644) ECE 3yr 📞</li>
            <li> Ms.Vidhya G -(7200216497) ECE 2yr📞</li>
          </ul></section>



      </motion.div>
    </div>
  );
};

export default GullyCricket;
