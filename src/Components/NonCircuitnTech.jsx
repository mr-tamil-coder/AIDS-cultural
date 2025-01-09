import React from "react";
import "../text.css"; // Ensure this file contains any other necessary styling
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";
import bgmi from "../assets/symposium/BGMI_Final.jpeg";
import ff from "../assets/symposium/FreeFire.jpg";
import cini from "../assets/symposium/Cinephilia.jpg";
import vault from "../assets/symposium/MysteryVault.jpeg";
import deadly from "../assets/symposium/deadly.png";
import randomColor from "randomcolor";
import iplauction from "../assets/symposium/iplauction.jpg"

import { Link } from "react-router-dom";
// import "./NonCircuitnTech.css";

const NonCircuitnTech = () => {
  const color = randomColor();
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: cini,
      altText: "Cinephilia",
      path: "/cinephilia",
    },
    {
      id: 2,
      imageSrc: vault,
      altText: "Mystery Vault",
      path: "/mysteryvault",
    },
    {
      id: 3,
      imageSrc: deadly,
      altText: "Deadly Deeds",
      path: "/deadlydeeds",
    },
    {
      id: 4,
      imageSrc: iplauction,
      altText: "IPL Auction",
      path: "/iplauction",
    },
    {
      id: 5,
      imageSrc: bgmi,
      altText: "BGMI",
      path: "/bgmi",
    },
    {
      id: 6,
      imageSrc: ff,
      altText: "Free Fire",
      path: "/ff",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
        style={{
          textShadow: `2px 2px 15px ${color}`,
        }}
      >
        Non Technical Events
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
