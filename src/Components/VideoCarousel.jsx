import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import gvPrakash from "../assets/Cultural/video/gvPrakash.mp4"
import pugazh from "../assets/Cultural/video/pugazh.mp4"
import sunitha from "../assets/Cultural/video/sunitha.mp4"
import pavish from "../assets/Cultural/video/pavish.mp4"
import adithya from "../assets/Cultural/video/Adithya.mp4"
import kuraishi from "../assets/Cultural/video/kuraishi.mp4"
const videos = [
  { id: 1, src: gvPrakash },
  { id: 2, src: pugazh },
  { id: 3, src: sunitha },
  { id: 4, src: pavish },
  { id: 5, src:adithya },
  { id: 6, src: kuraishi },
];

const VideoCarousel = () => {
  const videoRefs = useRef([]);

  const handleVideoPlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause(); // Pause all other videos
      }
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6 ">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-lg"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.id} className="flex justify-center">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              controls
              onPlay={() => handleVideoPlay(index)}
              className="w-full h-[600px] bg-red-300 object-cover rounded-lg border border-gray-300 shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
