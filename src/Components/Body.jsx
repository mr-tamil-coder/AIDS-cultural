import React, { useState, useEffect } from "react";
import CollegeName from "./CollegeName";
import Loading from "./Loading"; // Import the loader
import Faq from "./Faq";
import NewAbout from "./NewAbout";
import CountdownTimer from "./CountDown";
import Footer from "./Footer";
import Highlight from "./Highlight";
import TeamCarousel from "./TeamCarousel";
import InfoSections from "./InfoSections";
import HomeEventDetails from "./HomeEventDetails";
import NeonButton from "./NeonButton";
import EventButton from "./EventButton";
import EventCardDesign from "./EventCardDesign";
import Card from "./Card";
import MediaSection from "./MediaSection";
import ContactUs from "./ContactUs";
import LocateMap from "./LocateMap";
import Teams from "./Teams";
import "animate.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import OverallGuest from "./OverallGuest";
import VideoCarousel from "./VideoCarousel";
import ImgCarousel from "./ImgCarousel";
const Body = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false); // Hide loader after 2 seconds
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loading />; // Display loader while loading is true
  // }

  return (
    <div>
      <div className="mt-small">
        <CollegeName />

        {/* <CountdownTimer /> */}
      </div>

      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />
      <NewAbout />
      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />
      <div className="flex justify-center items-center h-24 p-4 sm:h-32 sm:p-6">
        <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 drop-shadow-lg font-[Poppins] text-center">
          Celebrity Guests
        </h2>
      </div>
      <ImgCarousel/>
      <VideoCarousel />
      {/* <HomeEventDetails />
      <InfoSections />
      <TeamCarousel /> */}
      {/* <OverallGuest />
      <Carousel1 />
      <Carousel /> */}
      {/* <Faq /> */}
      {/* <MediaSection />
      <ContactUs />
      <LocateMap /> */}
      <Footer />
      <Teams />
      {/* <Teams /> */}
    </div>
  );
};

export default Body;
