import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/energiaNova.jpg"; // Replace with your actual image
import "./EnergiaNova.css";

const EnergiaNova = () => {
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
          ✨
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
          MAATRI YOSI
          </span>
        </h1>

        {/* Description Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
           Description
          </h2>
          <p>
          Hello everyone! 🤗 
          ✨ Greetings from Jerusalem College of Engineering✨
          புதுமைகள் செய்த தேசமிது
          பூமியின் கிழக்கு வாசலிது!
          The Jerusalem college of Engineering along with TAMIL MANDRAM proudly presents the
          💫EXCELSIOR 2025!💫<br></br>
          🗒நிகழ்வின் பெயர்: மாத்தியோசி<br></br>
          🗓தேதி: 20.03.2025<br></br>
          📍இடம்: Seminar Hall<br></br>
           ⏰நேரம்: 11.30 to 1.00<br></br>
          தவறாக நினைப்பதே சரியானது என்ற விளையாட்டு! 🤓
          உங்கள் மூளையைத் திருப்ப நீங்கள் தயாரா? 😎
           </p>
        </section>

        {/*RULES AND REGULATIONS: Section */}
        <section className="text-gray-300">
          <h2>
            📌{" "}
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            RULES AND REGULATIONS:
            </span>
          </h2>

          <p>
          விதிகள் மற்றும் விதிமுறைகள்:<br></br>

          🎤இது ஒரு நபர் கலந்து கொல்லும் போட்டி.
          🎤கேட்கப்படும் கேள்விகளுக்கு மாறாக(சம்மந்தமின்றி) பதிலளிக்க வேண்டும்.

          🎤ஆங்கிலம் வார்த்தைகள் பயன்படுத்த கூடாது.<br></br>

          🎤ஒரு வார்த்தையை ஒரு முறைக்கு மேல் பயன்படுத்த கூடாது.<br></br> 

          🎤ஒருவருக்கு ஒரு நிமிடம் வழங்கப்படும்.<br></br>

          🎤அதிக நொடிக்கு விதிமுறைகளை பின்பற்றி பேசுபவர்கள் வெற்றியாளராக தேர்ச்சிசெய்யபடுவார்.<br></br>

          </p>
          <ul className="list-disc list-inside">
            <li>Abstract word limit: 100 - 150 words</li>
            <li>
              The document must include:
              <ol className="list-decimal list-inside pl-4">
                <li>Title of the paper</li>
                <li>Authors (Maximum of 3) and institutional affiliations</li>
                <li>Description of the topic, methodology, and outcomes</li>
              </ol>
            </li>
            <li>Accepted abstracts will be intimated to authors</li>
          </ul>

          <h3 className="text-xl md:text-2xl lg:text-1xl font-bold mb-2 gradient-text">
            Round 2: Full Paper Submission
          </h3>
          <p>Authors must submit a full paper (maximum 10 pages) covering:</p>
          <ul className="list-disc list-inside">
            <li>Introduction</li>
            <li>Existing Work</li>
            <li>Methodology</li>
            <li>Results & Discussion</li>
            <li>Conclusion</li>
            <li>References</li>
          </ul>

          <h3 className="text-xl md:text-2xl lg:text-1xl font-bold mb-2 gradient-text">
            Round 3: Final Paper Presentation
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Presentation time: 8–10 minutes followed by 2–3 minutes Q&A.
            </li>
            <h3 className="text-xl md:text-2xl lg:text-1xl font-bold mb-2 gradient-text">
              Must Include:
            </h3>
            <ul className="list-disc list-inside pl-4">
              <li>Introduction of the topic</li>
              <li>Methodology or approach</li>
              <li>Key findings and insights</li>
              <li>Conclusion and recommendations</li>
            </ul>
          </ul>
        </section>

        
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Abstract and Paper Submission
          </h2>
          <p>
              Submit your work to:{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc32a8zSq5dbEOrNksN3SbqHz6EnvRihNDpW7Up5Gb1EZtFdA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click here to submit
              </a>
            </p>
        </section>

        {/* Enquiry Contact Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Enquiry Contact
          </h2>
          <p>
            Name: <strong>Aravinth Balaji N</strong>
            <br />
            Contact: +91 63811 36008
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default EnergiaNova;
