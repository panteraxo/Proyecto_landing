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
import TestimonialCard from "./TestimonialCard";
const testimonials = [
  {
    image: B01,
    name: "Roberto Fernandez",
    review:
      "El servicio de mensajería ha sido excelente. Envié un paquete importante y llegó el mismo día sin ningún problema. Son puntuales y profesionales, lo cual genera mucha confianza.",
  },
  {
    image: B02,
    name: "Ana Martínez",
    review:
      "¡Increíble servicio! Me ayudaron a enviar un paquete a tiempo para un evento familiar. Muy recomendable.",
  },
  {
    image: B03,
    name: "Luis Gómez",
    review:
      "Atención impecable y entrega rápida. Estoy satisfecho y seguiré usando sus servicios.",
  },
  {
    image: B04,
    name: "Carla López",
    review:
      "Es la mejor empresa de mensajería que he usado hasta ahora. Mi paquete llegó sin contratiempos.",
  },
  {
    image: B05,
    name: "Jorge Silva",
    review:
      "Excelente comunicación y puntualidad. Definitivamente lo recomiendo.",
  },
  {
    image: B06,
    name: "Laura Torres",
    review:
      "Un servicio confiable y eficiente. Me gustó mucho la facilidad de seguimiento de mi paquete.",
  },
];
const SliderTes = () => {
  return (
    <div className="slider-container relative">
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
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              image={testimonial.image}
              name={testimonial.name}
              review={testimonial.review}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderTes;
