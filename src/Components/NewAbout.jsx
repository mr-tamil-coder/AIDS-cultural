import React, { useEffect, useRef } from "react";
import "./animation.css"; // Import the CSS for the cubes animation
import VanillaTilt from "vanilla-tilt";
import Image from "../assets/symposium/SymLogo.png";

const NewAbout = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    // Initialize VanillaTilt for the image container
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15, // Maximum tilt
        speed: 400, // Animation speed
        glare: false, // Add a glare effect
      });
    }
  }, []);

  return (
    <div className="bg-dark-grey text-white-grey flex flex-col items-center py-10">
      {/* Glassmorphic Container */}
      <div className="glassmorphic-container p-6 md:p-10 w-full max-w-5xl">
        {/* Heading Section */}
        <h1 className="text-5xl md:text-5xl text-lg mb-5 leading-relaxed text-left">
          About
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-aboutfont tracking-widest text-left">
        EXCELSIOR'25
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Text Section */}
          <div className="md:w-[60%] w-full text-lg leading-relaxed text-justify px-4">
            <p>
           
      Excelsior'25 is the epitome of innovation and collaboration, designed to foster creativity, ignite ideas, and push the boundaries of technology. With a focus on modern advancements, it stands as a beacon for tech enthusiasts, paving the way for a future driven by knowledge and passion.
            </p>
            <p className="mt-4">
            <p className="mt-4">
      Excelsior is a cultural event of Jerusalem College that celebrates the vibrant diversity and rich heritage of our community. It offers a platform for students to showcase their talents in various forms of art, music, dance, and drama. 
    </p>
            </p>
          </div>

          {/* Image Section */}
          <div
            // ref={tiltRef}
            className="md:w-[40%] w-full mt-6 md:mt-0 flex justify-center"
          >
            <img
              src={Image}
              alt="Technovanza Logo"
              className="max-w-full md:max-w-[80%] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAbout;
