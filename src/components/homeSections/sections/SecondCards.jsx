import React from "react";
import "../style/SecondCards.css";
import img1 from "../../../assets/imgs/home cards/image 39.png";
import img2 from "../../../assets/imgs/home cards/image 12.png";
import img3 from "../../../assets/imgs/home cards/image 64.png";
import img4 from "../../../assets/imgs/home cards/image 41.png";
import img5 from "../../../assets/imgs/home cards/Macbook 1.png";
import img6 from "../../../assets/imgs/home cards/Screen.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SecondCards = () => {
  return (
    <div className="second-cards flex-parent">
      <div className="container flex-container-row">
        <Swiper
          className="swiper  flex-container-row"
          spaceBetween={0}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
          pagination={{ clickable: true }} // Pagination settings
          modules={[Pagination, Autoplay, Navigation]} // Include the modules here
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            720: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1054: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1365: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
        >
          <SwiperSlide className="slide">
            {" "}
            <div className="child first flex-container-column">
              <div className="card-img">
                <img src={img1}></img>
                <img src={img2} className="abs"></img>
              </div>
              <div className="card-content flex-container-column">
                <h2>Popular Products</h2>
                <p>
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <a href="#first-cards">
                  <button className="btn">Shop Now</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <div className="child second flex-container-column">
              <div className="card-img">
                <img src={img3}></img>
              </div>
              <div className="card-content flex-container-column">
                <h2>Ipad Pro</h2>
                <p>
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <a href="#first-cards">
                  <button className="btn">Shop Now</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <div className="child third flex-container-column">
              <div className="card-img">
                <img src={img4}></img>
              </div>
              <div className="card-content flex-container-column">
                <h2>Samsund Galaxy </h2>
                <p>
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <a href="#first-cards">
                  <button className="btn">Shop Now</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            {" "}
            <div className="child fourth flex-container-column">
              <div className="card-img">
                <img src={img5} className="mac mac1"></img>
                <img src={img6} className="mac mac2"></img>
              </div>
              <div className="card-content flex-container-column">
                <h2>Matebook Pro </h2>
                <p>
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <a href="#first-cards">
                  <button className="btn">Shop Now</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default SecondCards;
