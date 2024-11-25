import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import B01 from "../../assets/images/perfil/perf1.jpg";
import B02 from "../../assets/images/perfil/perf2.jpg";
import B03 from "../../assets/images/perfil/perf3.jpg";
import B04 from "../../assets/images/perfil/perf4.jpg";
import B05 from "../../assets/images/perfil/perf5.jpg";
import B06 from "../../assets/images/perfil/perf6.jpg";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderTes = () => {
  return (
    <div className="slider-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        <SwiperSlide>
          <div class="max-w-sm bg-e4 border text-e1 border-e4 rounded-lg shadow ">
            <div class="p-5">
              <div className="flex flex-row mb-4 justify-center">
                <img
                  alt=""
                  src={B01}
                  className="size-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="flex justify-center gap-0.5 ">
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-e1">
                    Roberto Fernandez
                  </p>
                </div>
              </div>
              <div>
                "El servicio de mensajería ha sido excelente. Envié un paquete
                importante y llegó el mismo día sin ningún problema. Son
                puntuales y profesionales, lo cual genera mucha confianza.
                Definitivamente seguiré usando este servicio."
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="max-w-sm bg-e4 border text-e1 border-e4 rounded-lg shadow ">
            <div class="p-5">
              <div className="flex flex-row mb-4 justify-center">
                <img
                  alt=""
                  src={B02}
                  className="size-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="flex justify-center gap-0.5 ">
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-e1">
                    Roberto Fernandez
                  </p>
                </div>
              </div>
              <div>
                "El servicio de mensajería ha sido excelente. Envié un paquete
                importante y llegó el mismo día sin ningún problema. Son
                puntuales y profesionales, lo cual genera mucha confianza.
                Definitivamente seguiré usando este servicio."
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="max-w-sm bg-e4 border text-e1 border-e4 rounded-lg shadow ">
            <div class="p-5">
              <div className="flex flex-row mb-4 justify-center">
                <img
                  alt=""
                  src={B03}
                  className="size-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="flex justify-center gap-0.5 ">
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-e1">
                    Roberto Fernandez
                  </p>
                </div>
              </div>
              <div>
                "El servicio de mensajería ha sido excelente. Envié un paquete
                importante y llegó el mismo día sin ningún problema. Son
                puntuales y profesionales, lo cual genera mucha confianza.
                Definitivamente seguiré usando este servicio."
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="max-w-sm bg-e4 border text-e1 border-e4 rounded-lg shadow ">
            <div class="p-5">
              <div className="flex flex-row mb-4 justify-center">
                <img
                  alt=""
                  src={B04}
                  className="size-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="flex justify-center gap-0.5 ">
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-e1">
                    Roberto Fernandez
                  </p>
                </div>
              </div>
              <div>
                "El servicio de mensajería ha sido excelente. Envié un paquete
                importante y llegó el mismo día sin ningún problema. Son
                puntuales y profesionales, lo cual genera mucha confianza.
                Definitivamente seguiré usando este servicio."
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="max-w-sm bg-e4 border text-e1 border-e4 rounded-lg shadow ">
            <div class="p-5">
              <div className="flex flex-row mb-4 justify-center">
                <img
                  alt=""
                  src={B05}
                  className="size-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="flex justify-center gap-0.5 ">
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-e1">
                    Roberto Fernandez
                  </p>
                </div>
              </div>
              <div>
                "El servicio de mensajería ha sido excelente. Envié un paquete
                importante y llegó el mismo día sin ningún problema. Son
                puntuales y profesionales, lo cual genera mucha confianza.
                Definitivamente seguiré usando este servicio."
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="max-w-sm bg-e4 border text-e1 border-e4 rounded-lg shadow ">
            <div class="p-5">
              <div className="flex flex-row mb-4 justify-center">
                <img
                  alt=""
                  src={B06}
                  className="size-14 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="flex justify-center gap-0.5 ">
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                    <Star fill="yellow" className="size-9 text-yellow-400" />
                  </div>
                  <p className="mt-0.5 text-lg font-medium text-e1">
                    Roberto Fernandez
                  </p>
                </div>
              </div>
              <div>
                "El servicio de mensajería ha sido excelente. Envié un paquete
                importante y llegó el mismo día sin ningún problema. Son
                puntuales y profesionales, lo cual genera mucha confianza.
                Definitivamente seguiré usando este servicio."
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderTes;
