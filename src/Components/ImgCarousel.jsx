import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import gvPrakash from "../assets/Cultural/CelebrityPics/gvprakash.jpg";
import pugazh from "../assets/Cultural/CelebrityPics/pugazh.jpg";
import sunitha from "../assets/Cultural/CelebrityPics/sunitha.jpg";
import pavish from "../assets/Cultural/CelebrityPics/pavish.jpg";
import adithya from "../assets/Cultural/CelebrityPics/adithya.jpg";
import kuraishi from "../assets/Cultural/CelebrityPics/kuraishi.jpg";
const imgs = [
  { id: 1, src: gvPrakash },
  { id: 2, src: pugazh },
  { id: 3, src: sunitha },
  { id: 4, src: pavish },
  { id: 5, src:adithya },
  { id: 6, src: kuraishi },
];

const ImgCarousel = () => {
  const imgRefs = useRef([]);

  

  return (
    <div className="w-full h-full max-w-7xl mx-auto my-7 ">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="rounded-lg"
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={img.id} className="flex justify-center">
            <img
              ref={(el) => (imgRefs.current[index] = el)}
              src={img.src}
              controls
              
              className="w-full h-[600px] lg:h-[700px] bg-red-300 object-cover rounded-lg border border-gray-300 shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImgCarousel;
