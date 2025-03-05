import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import MysteryVaultImage from "../../../assets/Cultural/online/Reels.jpg";
import "./MysteryVault.css";

const MysteryVault = () => {
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
          src={MysteryVaultImage}
          alt="Mystery Vault Event"
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
          REELS
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            <strong>"🎬Reel it to win it 🎬"</strong>  
            <br /> Are you ready to showcase your creativity and storytelling skills.. ?! <br/> Join our EXCELSIOR'2k25 and stand a chance to win exciting prizes. !  
          </p>
          {/* <p>
            We are excited to welcome you to  
            <strong> ✧･ﾟ: ✦✨ MYSTERY VAULT ✨✦:･ﾟ✧ </strong>,  
            a national-level non-technical event designed to test your ingenuity, collaboration, and technical acumen.
          </p> */}
          {/* <p>
            Gear up to dive into a series of exciting rounds, solve mysteries, and prove your mettle against the brightest minds!
          </p> */}
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Rules & Regulations:
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>Online registration is mandatory.</li>
            <li>Duration is min. 25 sec to max.</li>
            <li>One reel for one participant.</li>
            <li>Videos will be posted on our Instagram page.</li>
            <li>Results will be based on likes.</li>
            <li>Send your video with name, department and year.</li>

          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Note:
          </h2>
          
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>18+ content strictly not allowed.</li>
            <li> Video should not contain any vulgarity.</li>
            <li>Fake likes lead to disqualification.</li>
          </ul>
          {/* <p className="mt-4 text-body lg:text-2xl"><strong>✅ Rules:</strong></p>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>No direct hand contact with the balls; only pens should be used.</li>
            <li>A time limit of 1 minute is given to participants.</li>
            <li>You should not drop the ball more than three times.</li>
          </ul> */}
        </section>

        {/* <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            🍂 Round 2: Taste & Tell the Tech Word
          </h2>
          <p className="text-body lg:text-2xl"><strong>Task:</strong></p>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Participants will be blindfolded.</li>
            <li>You are given different food items to taste.</li>
            <li>Based on the taste and clues, you should say a tech-related word to your teammate.</li>
            <li>Your teammate should find the food item.</li>
          </ul>
          <p className="mt-4 text-body lg:text-2xl"><strong>✅ Rules:</strong></p>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>You must guess the tech word within 30 seconds per item.</li>
            <li>No touching or smelling the food; only tasting is allowed.</li>
            <li>Guessing wrongly more than twice will lead to finding the next food item.</li>
          </ul>
        </section>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            Let the <strong>MYSTERY VAULT</strong> unveil the genius within you!  
          </p>
        </section> */}

        {/* <section className="text-gray-300">
          <p className="text-center font-bold">
            Best Regards,  
            <br /> Department of Information Technology  
          </p>
        </section> */}

<section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            For Enquiry:
          </h2>
          <p className="text-body lg:text-2xl">
            Contact: <br /> 
            <strong>Pragathy R.V :</strong> +91 9025058007
            <br />
            <strong>Deepika. R :</strong> +91 7338820508
            <br />
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default MysteryVault;
