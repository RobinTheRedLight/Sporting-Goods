/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./styles.css";
import img1 from "../../../assets/home/img1.jpg";
import img2 from "../../../assets/home/img2.jpg";
import img3 from "../../../assets/home/img3.jpg";

const Carousel = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  return (
    <>
      <div className="overlay">
        <h1>Eternal Fashion</h1>
        <h2>Embrace Your Timeless Look</h2>
        <div className="button-container">
          <button className="shop-now">SHOP NOW</button>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <div className="dark-overlay"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <div className="dark-overlay"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <div className="dark-overlay"></div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
