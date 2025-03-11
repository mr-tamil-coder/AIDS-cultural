import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import NeonButton from "./NeonButton";
// CountdownTimer Component
const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-03-20T00:00:00").getTime();
    const currentTime = new Date().getTime();
    const difference = eventDate - currentTime;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    const formattedTimeLeft = {
      days: timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days,
      hours: timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours,
      minutes:
        timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes,
      seconds:
        timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds,
    };

    return formattedTimeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 3 }}
      className="mt-12 mb-4 text-center"
    >
      <motion.p
        className="text-xl md:text-2xl font-light text-purple-100 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.2 }}
      >
        The Best Moments Await!...
      </motion.p>

      <div className="flex justify-center space-x-4 md:space-x-8">
        {/* Days */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.4 }}
        >
          <div className="bg-gradient-to-b from-purple-600 to-purple-900 rounded-lg px-4 py-2 w-20 md:w-24 backdrop-blur-sm border border-purple-400/20">
            <div className="text-3xl md:text-4xl font-bold text-white animate__animated animate__heartBeat animate__infinite animate__slower">
              {timeLeft.days}
            </div>
          </div>
          <span className="text-purple-200 text-sm mt-2">Days</span>
        </motion.div>

        {/* Hours */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.6 }}
        >
          <div className="bg-gradient-to-b from-purple-600 to-purple-900 rounded-lg px-4 py-2 w-20 md:w-24 backdrop-blur-sm border border-purple-400/20">
            <div className="text-3xl md:text-4xl font-bold text-white animate__animated animate__heartBeat animate__infinite animate__slower">
              {timeLeft.hours}
            </div>
          </div>
          <span className="text-purple-200 text-sm mt-2">Hours</span>
        </motion.div>

        {/* Minutes */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.8 }}
        >
          <div className="bg-gradient-to-b from-purple-600 to-purple-900 rounded-lg px-4 py-2 w-20 md:w-24 backdrop-blur-sm border border-purple-400/20">
            <div className="text-3xl md:text-4xl font-bold text-white animate__animated animate__heartBeat animate__infinite animate__slower">
              {timeLeft.minutes}
            </div>
          </div>
          <span className="text-purple-200 text-sm mt-2">Minutes</span>
        </motion.div>

        {/* Seconds */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 4 }}
        >
          <div className="bg-gradient-to-b from-purple-600 to-purple-900 rounded-lg px-4 py-2 w-20 md:w-24 backdrop-blur-sm border border-purple-400/20">
            <div className="text-3xl md:text-4xl font-bold text-white animate__animated animate__heartBeat animate__infinite animate__slower">
              {timeLeft.seconds}
            </div>
          </div>
          <span className="text-purple-200 text-sm mt-2">Seconds</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Component
const CollegeName = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white opacity-10 rounded-full blur-sm"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="z-10 text-center max-w-4xl">
        {/* College Name */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 tracking-wider"
        >
          <span className=" bg-clip-text drop-shadow-lg">
            JERUSALEM COLLEGE OF ENGINEERING
          </span>
        </motion.h1>

        {/* Presents text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative my-6"
        >
          <hr className="border-t border-purple-300 w-24 mx-auto opacity-50" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2   text-lg sm:text-xl md:text-2xl font-bold px-4 ">
            PRESENTS
          </span>
          <hr className="border-t border-purple-300 w-24 mx-auto opacity-50" />
        </motion.div>

        {/* Event Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{
            duration: 1.2,
            delay: 1.2,
            type: "spring",
            stiffness: 100,
          }}
          className="relative text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mt-6"
        >
          <span className="relative inline-block">
            <span className="absolute inset-0 blur-xl bg-white opacity-20"></span>
            <span className="relative bg-gradient-to-b from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
              EXCELSIOR
            </span>
          </span>

          {/* Year with glowing effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-md bg-cyan-400 opacity-30 animate-pulse"></span>
              <span className="relative bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                2025
              </span>
            </span>
          </motion.div>
        </motion.h1>

        {/* Subtitle or tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-8 text-lg md:text-xl text-purple-100 font-light tracking-wide max-w-lg mx-auto"
        >
        </motion.p>

        {/* Integrate Countdown Timer here */}
        <CountdownTimer />

        <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp duration-500">
          <Link to="/events">
            <NeonButton label="Explore" />
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0.7 : 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-purple-900 to-transparent"
      />

      {/* Add custom style for floating animation and include animate.css */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-100px) rotate(180deg);
          }
          100% {
            transform: translateY(-200px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Adding essential animate.css classes for the countdown */
        .animate__animated {
          animation-duration: 1s;
          animation-fill-mode: both;
        }

        .animate__infinite {
          animation-iteration-count: infinite;
        }

        .animate__slower {
          animation-duration: 3s;
        }

        .animate__heartBeat {
          animation-name: heartBeat;
          animation-duration: 1.3s;
          animation-timing-function: ease-in-out;
        }

        @keyframes heartBeat {
          0% {
            transform: scale(1);
          }
          14% {
            transform: scale(1.1);
          }
          28% {
            transform: scale(1);
          }
          42% {
            transform: scale(1.1);
          }
          70% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default CollegeName;
