import React from "react";
import "../text.css"; // Ensure this file contains any other necessary styling
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";
import randomColor from "randomcolor";
import Film from "../assets/Cultural/online/ShortFilm.jpg";
import EssayTamil from "../assets/Cultural/online/EssayTamil.jpg";
import EssayEnglish from "../assets/Cultural/online/EssayEnglish.jpg";
import Kavithai from "../assets/Cultural/online/Kavithai.jpg";
import Meme from"../assets/Cultural/online/MemeCompetition.jpg";
import Photo from "../assets/Cultural/online/Photography.jpg";
import Reel from "../assets/Cultural/online/Reels.jpg";



import { Link } from "react-router-dom";
// import "./NonCircuitnTech.css";

const NonCircuitnTech = () => {
  const color = randomColor();
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: Film,
      altText: "Cinephilia",
      path: "/cinephilia",
    },
    {
      id: 2,
      imageSrc: Reel,
      altText: "reels",
      path: "/reels",
    },
    {
      id: 3,
      imageSrc: Photo,
      altText: "Photography",
      path: "/photography",
    },
    {
      id: 4,
      imageSrc: Meme,
      altText: "IPL Auction",
      path: "/iplauction",
    },
    {
      id: 5,
      imageSrc: Kavithai,
      altText: "BGMI",
      path: "/bgmi",
    },
    {
      id: 6,
      imageSrc: EssayTamil,
      altText: "Free Fire",
      path: "/ff",
    },
    {
      id: 7,
      imageSrc: EssayEnglish,
      altText: "Free Fire",
      path: "/essayeng",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
        style={{
          textShadow: `2px 2px 15px ${color}`,
        }}
      >
        Online Events
      </h3>

      <div>
        <main className="card-container gap-10 flex flex-wrap justify-center w-full">
          {/* Loop through each event and render a Card */}
          {circuittechnicalEvents.map((card) => (
            <Link to={card.path} key={card.id}>
              <Card imageSrc={card.imageSrc} altText={card.altText} />
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default NonCircuitnTech;
