import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import JigsawImage from "../../../assets/symposium/cassedete.jpg";

const Cassedete = () => {
  const tiltRefJigsaw = useRef(null);

  useEffect(() => {
    if (tiltRefJigsaw.current) {
      VanillaTilt.init(tiltRefJigsaw.current, {
        max: 15,
        speed: 400,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-12 max-w-7xl mx-auto p-6">
      {/* Jigsaw */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          ref={tiltRefJigsaw}
          className="lg:w-1/2 w-full flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={JigsawImage}
            alt="Jigsaw"
            className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          className="lg:w-3/4 w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
          style={{ maxHeight: "calc(100vh - 100px)" }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
          ✨ DRAWING CONTEST – RULES & REGULATIONS ✨
          </h1>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
          📌 Theme: Ink of Dreams 
          </h1>

          
        <section className="text-gray-300">
          <h2>🛠️ 
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              📅Event Details:
          </span></h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li><strong>Date:</strong> 20/03/25 📅</li>
            <li><strong>Time:</strong> 11:30 AM – 01:00 PM⏰</li>
            <li><strong>Venue:</strong>  M303🏡</li>
            
          </ul>
        </section> 
          <section className="text-gray-300 text-justify">
            <h2 className="text-xl md:text-2xl font-bold gradient-text">
            Guidelines for Participants:
            </h2>
            <ul className="list-disc list-inside">
              <li> <strong>Artwork Requirements:</strong> Participants are free to create either abstract or realistic drawings. They may choose vibrant colors or monochrome styles using any traditional medium such as watercolors, pastels, or pencils. Digital art and photographs will not be accepted.</li>
              <li> <strong>Required Materials:</strong> Contestants must bring their own art supplies, including colors, brushes, and other necessary tools. Drawings should be made on an A3-sized sheet.</li>
              <li> <strong> Time Limit:</strong> The competition will run for 45 minutes, starting at 11:30 AM .</li>
              <li> <strong> Submission Guidelines:</strong> Participants must hand in their completed artwork at least 5 minutes before the deadline. Late submissions will not be entertained.</li>
              <li> <strong>   Judging Parameters: </strong> <br /> <pre>
✅ Innovation & Concept <br />
✅ Connection to the Theme <br />
✅ Artistic Skills & Techniques <br />
✅ Neatness & Overall Presentation </pre></li>
<li> <strong>Final Decision:</strong>   The judges verdict will be conclusive and cannot be appealed.</li>
<li> <strong> Prizes & Recognition:</strong> Winners will be chosen based on creativity, originality, and interpretation of the theme.</li>
<li> <strong> Integrity & Ethics:</strong> Any form of duplication or copying of existing artwork will lead to immediate disqualification.</li>
            </ul>
          </section>

          <section className="text-gray-300 mt-4">
             {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text">
            📜 விதிமுறைகள் 📜
            </h2> */}
            <div className="mt-4">
              {/* <ul className="list-disc list-inside ml-6">
                <li>🎙. இரு நபர்கள் கொண்ட குழுவாக இருக்க வேண்டும்.</li>
                <li>🎙. கேட்கப்படும் கேள்விகளில் இரண்டு உண்மை மற்றும் ஒரு பொய் இருக்கும், அதில்  பொய் எதுவென்று கண்டுபிடிக்கவேண்டும் .</li>
                <li>🎙. முதலில் சரியான பதில் அளிக்கும் குழுவிற்கு மதிப்பெண் வழங்கப்படும்.
                  <li>🎙. அதிக மதிப்பெண் எடுக்கும் குழு நபர்களே  வெற்றியாளர்கள்.</li>
                </li>
              </ul>  */}
              <section className="text-gray-300">
          <h2>
            📞 
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
             Student Coordinator :
            </span>
          </h2>
          <p className="mt-4 lg:text-2xl">
             <li> 1.Sreya.T.R (III-CS&BS) - 7305909778.</li>
             <li> 2.Sharan.S (II-CS&BS) - 8248782437</li>

          </p>
        </section>
            
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Cassedete;
