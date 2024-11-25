import React from "react";
import SliderTes from "../components/carousel/SliderTes";

function Testimonial() {
  return (
    <section className="bg-e5">
      <div className="flex flex-col mb-40 mt-40">
        <h1 className="text-4xl font-extrabold justify-center items-center flex tracking-tight leading-none text-e1 md:text-5xl lg:text-6xl mt-12 mb-20">
          Nuestros clientes nos recomiedan
        </h1>
        <SliderTes />
      </div>
    </section>
  );
}

export default Testimonial;
