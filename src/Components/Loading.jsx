import React, { useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Loaderr from "../assets/Price/Loader.json";

const Loader = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setViewport(0, 0, 200, 200);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-[100px] h-[100px]">
        <DotLottieReact
          ref={lottieRef}
          data={Loaderr}
          loop
          autoplay
          renderConfig={{ autoResize: true }}
        />
      </div>
    </div>
  );
};

export default Loader;
