  import React from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
  import "swiper/css/navigation";
  import { Navigation, Autoplay } from "swiper/modules";
  import { ItemServices } from "./ItemServices";

  //Images
  import imgActuDatos from "../assets/images/actu-datos.jpg";
  import imgDevApi from "../assets/images/desarrollo-API.jpg";
  import imgDevApliPerso from "../assets/images/dev-apli-perso.jpg";
  import imgDisenioUx from "../assets/images/disenio-ux.jpg";
  import imgDisenioWeb from "../assets/images/disenio-Web.jpg";
  import imgImpleDes from "../assets/images/imple-desplie.jpg";
  import imgInteSis from "../assets/images/integracion-sistemas.jpg";
  import imgManteApli from "../assets/images/mante-apli.jpg";


  export const ServiciosComponent = () => {
    return (
      <section id="services" className="mt-16">
        <h1 className="text-2xl text-blue-bg font-bold sm:text-3xl py-12 md:text-4xl text-center">Nuestros Servicios</h1>
        <div className="h-[26rem] md:h-[28rem] lg:h-[30rem] flex justify-center relative">
          <div className="h-full relative w-8/10 lg:w-9/10">
            <Swiper
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
              }}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              slidesPerView={3}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper h-full w-full"
            >
              <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <ItemServices
                  image = { imgActuDatos }
                  title = "Migraciones y actualizaciones de datos"
                  text = "Realizamos migraciones de datos en la nube, actualizaciones del sistema y otros servicios vitales de modernización de software, dando importancia al tiempo de actividad del sistema y la integridad de los datos."
                />
              </SwiperSlide>

              <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <ItemServices
                  image = { imgDevApi }
                  title = "Desarrollo de API"
                  text = "Desarrollamos APIs confiables, bien documentadas y fáciles de consumir que permiten integraciones flexibles y personalización de productos de software existentes."
                />
              </SwiperSlide>

              <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <ItemServices
                  image = { imgDevApliPerso }
                  title = "Desarrollo de Aplicaciones personalizadas"
                  text = "Creamos y mejoramos aplicaciones completamente escalables e innovadoras de acuerdo a las necesidades del cliente."
                />
              </SwiperSlide>

              <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <ItemServices
                  image = { imgDisenioUx }
                  title = "Diseño de UX/UI"
                  text = "Aproveche las últimas tecnologías, arquitecturas y tendencias de UI / UX para diseñar aplicaciones receptivas y escalables que transforman las experiencias de los clientes a través de múltiples canales."
                />
              </SwiperSlide>

              <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <ItemServices
                  image = { imgDisenioWeb }
                  title = "Desarrollo Web Personalizado"
                  text = "Nuestras soluciones de desarrollo web facilitan los flujos de trabajo, aumentan los ingresos y optimizan las operaciones comerciales."
                />
              </SwiperSlide>

              <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <ItemServices
                  image = { imgImpleDes }
                  title = "Implementación y Despliegue"
                  text = "Diseñamos un plan de implementación y despliegue de software a profundidad, evaluando las necesidades de su empresa, para así brindar tecnologías mejoradas a los usuarios finales."
                />
              </SwiperSlide>

              <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <ItemServices
                  image = { imgInteSis }
                  title = "Integración de Sistemas"
                  text = "Confiamos en nuestra experiencia tecnológica en varias industrias para ofrecer aplicaciones web, móviles, de escritorio e híbridas altamente escalables, flexibles e interoperables."
                />
              </SwiperSlide>

              <SwiperSlide className="relative rounded-3xl overflow-hidden">
                <ItemServices
                  image = { imgManteApli }
                  title = "Mantenimiento de aplicaciones"
                  text = "Nuestros servicios de mantenimiento y modernización de aplicaciones están diseñados para garantizar la escalabilidad, el rendimiento y la sostenibilidad de toda su infraestructura de software."
                />
              </SwiperSlide>

            </Swiper>
          </div>
          <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
            <div className="swiper-button-prev p-2 rounded-full cursor-pointer"></div>
            <div className="swiper-button-next p-2 rounded-full cursor-pointer"></div>
          </div>
        </div>
      </section>
    );
  };
