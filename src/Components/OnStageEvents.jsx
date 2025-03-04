import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";
import elo from "../assets/symposium/eloquence1.jpg";
import viz from "../assets/symposium/vizyour.jpeg";
import wiz from "../assets/symposium/Wizzup_Debug.jpeg";
import ghost from "../assets/symposium/Ghost.png";
import matter from "../assets/symposium/MatterMindNew.jpg";
import codesprint from "../assets/symposium/CodeSprint.jpeg";

import RandomEvents from "./RandomEvents";

//cultural
import Adaptune from "../assets/Cultural/onstage/Adaptune.jpg"
import dumbCharades from "../assets/Cultural/onstage/dumbCharades.jpg"
import groupDance from "../assets/Cultural/onstage/GroupDance.jpg"
import groupSinging from "../assets/Cultural/onstage/GroupSinging.jpg"
import HairstyleShow from "../assets/Cultural/onstage/HairstyleShow.jpg"
import MimeDrama from "../assets/Cultural/onstage/MimeDrama.jpg"
import TraditionalEthinicWear from "../assets/Cultural/onstage/TraditionalEthinicWear.jpg"
import vivathaMedai from "../assets/Cultural/onstage/VivathaMedai.jpg"


import { Link } from "react-router-dom";

const OnStageEvents = () => {
  const color = randomColor();
  // const noncircuittec = RandomEvents("Circuit Branch - Technical Events");

  // Events data
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: groupSinging, // Replace with actual image path
      altText: "Group Singing",
      label: "group Singing",
      path: "/group-singing",
    },
    {
      id: 2,
      imageSrc: MimeDrama,
      altText: "Group Drama",
      label: "group drama",
      path: "/group-drama",
    },
    {
      id: 3,
      imageSrc: TraditionalEthinicWear,
      altText: "Group traditional",
      label: "group traditional",
      path: "/group-traditional",
    },
    {
      id: 4,
      imageSrc: groupDance,
      altText: "group dance",
      label: "Group dance",
      path: "/group-dance",
    },
    {
      id: 5,
      imageSrc: dumbCharades,
      altText: "dumcharades",
      label: "dumcharades",
      path: "/dumcharades",
    },
    {
      id: 6,
      imageSrc: Adaptune,
      altText: "adaptune",
      label: "adaptune",
      path: "/adaptune",
    },
    {
      id: 7,
      imageSrc: HairstyleShow, 
      altText: "hairstyle-showdown",
      label: "hairstyle-showdown",
      path: "/hairstyle-showdown",
    },
    {
      id: 8,
      imageSrc: vivathaMedai,
      altText: "vivadha-medai",
      label: "vivadha-medai",
      path: "/vivadha-medai",
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
        ONSTAGE  Events
      </h3>

      <div>
        <main className="card-container gap-10 relative flex flex-wrap justify-center w-full">
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

export default OnStageEvents;
