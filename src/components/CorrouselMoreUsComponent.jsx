import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { ItemSwiperSlideComponent } from "./ItemSwiperSlideComponent";

import gifChat from "../assets/images/chat.gif";
import gifGear from "../assets/images/gear.gif";
import gifTarget from "../assets/images/target.gif";
import gifWin from "../assets/images/win.gif";

export const CorrouselMoreUsComponent = () => {
  return (
    <div className="h-7/10 w-9/10 2xl:w-7/10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          500: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <ItemSwiperSlideComponent
            title="Cercanía constante"
            pngImage={ gifChat }
            text="Estamos siempre a la disposicion para brindarte el asesoramiento continuo sobre nuestro servicios, asi como el constante mantenimiento y actualizacion de requerimientos a la medida."
          />
        </SwiperSlide>

        <SwiperSlide>
        <ItemSwiperSlideComponent
            title="Mejores Prácticas"
            pngImage={ gifGear }
            text="Utilizamos las mejores prácticas y los métodos estándar del sector para crear y brindar soluciones eficientes que impulsen el crecimiento y la gestión de tus negocios."
          />
        </SwiperSlide>

        <SwiperSlide>
        <ItemSwiperSlideComponent
            title="Enfoque de valor"
            pngImage={ gifTarget }
            text="Nuestros valores nos llevan a responder ágilmente al entorno empresarial, promoviendo la colaboración interna y externa. Esto nos impulsa hacia la excelencia profesional y nos convierte en un socio confiable para nuestros clientes"
          />
        </SwiperSlide>

        <SwiperSlide>
        <ItemSwiperSlideComponent
            title="Orientados al exito"
            pngImage={ gifWin }
            text="Dedicados a la entrega oportuna de soluciones con el máximo valor para usted. Nuestro éxito se define por el éxito de nuestros clientes."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
