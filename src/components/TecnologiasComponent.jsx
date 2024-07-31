import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import pngReact from "../assets/images/logo-technologies/logo-react.png";
import pngAngular from "../assets/images/logo-technologies/angular.png";
import pngCplus from "../assets/images/logo-technologies/logo-c++.png";
import pngJava from "../assets/images/logo-technologies/logo-java.png";
import pngNode from "../assets/images/logo-technologies/logo-node.png";
import pngPython from "../assets/images/logo-technologies/logo-python.png";
import pngVue from "../assets/images/logo-technologies/logo-vue.png";
import pngC from "../assets/images/logo-technologies/logo-c.png";


import { ItemCarrouselTecComponent } from "./ItemCarrouselTecComponent";

export const TecnologiasComponent = () => {
  return (
    <section className="mt-[7rem]" id="thecnologies">
      {/* Contenedor para toda la sección */}
      <div className="bg-black md:w-9/10 mx-auto lg:flex lg:w-full xl:w-9.5/10 xl:rounded-[3rem] 2xl:w-9/10">
        {/* Contenedor para el texto */}
        <div className="w-full h-[12rem] text-white flex flex-col justify-center text-center lg:w-1/2 lg:h-[18rem]">
          <h1 className="text-3xl font-bold py-5 sm:text-[2rem] lg:text-[2.5rem] xl:text-[2.8rem] 2xl:py-8">Tecnologías</h1>
          <p className="px-3 sm:text-[1.2rem] sm:px-14  md:text-[1.3rem] lg:text-[1.3rem] xl:text-[1.5rem] 2xl:text-[1.7rem]">
            Contamos con lenguajes de programación, marcos y herramientas de
            desarrollo de software para crear la solución que se adapte a tu
            negocio.
          </p>
        </div>

        {/* Contenedor para el carrousel */}
        <div className="w-full h-[14rem] px-5 flex items-center sm:w-9/10 mx-auto lg:w-1/2 lg:h-[18rem] 2xl:px-[4rem]">
          <Swiper
            navigation={true}
            autoplay={{ 
              delay: 1499, 
              disableOnInteraction: false 
            }}
            modules={[Navigation, Autoplay]}
            centeredSlides={true}
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              500: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="bg-white rounded-3xl 2xl:w-[200px] flex justify-center overflow-hidden">
              <ItemCarrouselTecComponent image={pngReact} />
            </SwiperSlide>

            <SwiperSlide className="bg-white rounded-3xl flex justify-center overflow-hidden">
              <ItemCarrouselTecComponent image={pngAngular} />
            </SwiperSlide>

            <SwiperSlide className="bg-white rounded-3xl flex justify-center overflow-hidden">
              <ItemCarrouselTecComponent image={pngCplus} />
            </SwiperSlide>

            <SwiperSlide className="bg-white rounded-3xl flex justify-center overflow-hidden">
              <ItemCarrouselTecComponent image={pngJava} />
            </SwiperSlide>

            <SwiperSlide className="bg-white rounded-3xl flex justify-center overflow-hidden">
              <ItemCarrouselTecComponent image={pngNode} />
            </SwiperSlide>

            <SwiperSlide className="bg-white rounded-3xl flex justify-center overflow-hidden">
              <ItemCarrouselTecComponent image={pngPython} />
            </SwiperSlide>

            <SwiperSlide className="bg-white rounded-3xl flex justify-center overflow-hidden">
              <ItemCarrouselTecComponent image={pngVue} />
            </SwiperSlide>

            <SwiperSlide className="bg-white rounded-3xl flex justify-center overflow-hidden">
              <ItemCarrouselTecComponent image={pngVue} />
            </SwiperSlide>

            <SwiperSlide className="bg-white rounded-3xl flex justify-center overflow-hidden">
              <ItemCarrouselTecComponent image={pngC} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
