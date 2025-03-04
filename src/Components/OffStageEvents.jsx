import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from '../utils/Img/TechLogo.jpg';
import energia from "../assets/symposium/energiaNova.jpg";
import batallia from "../assets/symposium/robots.png";
import bizqueset from "../assets/symposium/Biquest.png"
import tescaflow from "../assets/symposium/Tescaflow.jpg"
import cassedete from "../assets/symposium/cassedete.jpg"


import Drawing from "../assets/Cultural/offstage/Drawing.jpg";
import FirelessCookery from "../assets/Cultural/offstage/FirelessCookery.jpg";
import GullyCricket from "../assets/Cultural/offstage/GullyCricket.jpg";
import MaathiYosi from "../assets/Cultural/offstage/maathiYosi.jpg";
import OruPoiSol from "../assets/Cultural/offstage/OruPoiSol.jpg";
import ReverseReading from "../assets/Cultural/offstage/ReverseReading.jpg";
import TheRecallRace from "../assets/Cultural/offstage/TheRecallRace.jpg";
import RandomEvents from "./RandomEvents";
import { Link } from "react-router-dom";

const   OffStageEvents = () => {
  const color = randomColor();
  const CirTech = RandomEvents("Circuit Branch - Technical Events");

  // Events data
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: MaathiYosi, 
      altText: "MaathiYosi",
      label: "MaathiYosi",
      path: "/maathiYosi",
      // onClick: () => alert("Energia Nova clicked"),
    },
    {
      id: 2,
      imageSrc: OruPoiSol, 
      altText: "OruPoiSol",
      label: "OruPoiSol",
      path: "/oruPoiSol",
    },
    {
      id: 3,
      imageSrc: ReverseReading, 
      altText: "reverseReading",
      label: "reverseReading",
      path: "/reverseReading",
    },
    {
      id: 4,
      imageSrc: TheRecallRace, 
      altText: "recallRace",
      label: "recallRace",
      path: "/recallRace",
    },
    {
      id: 5,
      imageSrc: FirelessCookery, 
      altText: "FirelessCookery",
      label: "FirelessCookery",
      path: "/firelessCookery",
    },
    {
        id: 6,
        imageSrc: Drawing, 
        altText: "drawing",
        label: "drawing",
        path: "/drawing",
      },
      {
        id: 7,
        imageSrc: GullyCricket, 
        altText: "GullyCricket",
        label: "GullyCricket",
        path: "/gullyCricket",
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
       
      </h3>

      <div>
        <main className="card-container gap-10 relative flex flex-wrap justify-center w-full">
          {/* Loop through each event and render a Card */}
          {circuittechnicalEvents.map((card) => (
            <Link to={card.path} key={card.id}>
            <Card
              imageSrc={card.imageSrc}
              altText={card.altText}
              // label={card.label}
              // onClick={card.onClick}
            />
          </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default OffStageEvents;
