import React from "react";
import gif1 from "../assets/images/gif/gif1.gif";
import gif2 from "../assets/images/gif/gif2.gif";

function AboutUs() {
  return (
    <section className="block w-4/5 mx-auto ">
      <div className="grid grid-cols-2 items-center justify-items-center gap-4">
        <div className="bg-e4 h-full flex flex-col items-center justify-center">
          <p className="text-e1 text-7xl font-roboto font-bold mb-9">
            Nuestra mision:
          </p>
          <p className=" text-e1 flex items-center text-xl font-roboto  px-9 ">
            "simplificar la vida de nuestros clientes ofreciendo servicios de
            alta calidad que combinen innovación, eficiencia y confianza."
          </p>
        </div>
        <div className="bg-e5 flex justify-center">
          <img src={gif1} alt="Gif1" />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-items-center gap-4 mt-4">
        <div className="bg-e5 flex justify-center">
          <img src={gif2} alt="Gif1" />
        </div>
        <div className="bg-e4 h-full flex flex-col items-center justify-center">
          <p className="text-e1 text-7xl font-roboto font-bold mb-6">
            Nuestra visión:
          </p>
          <p className="bg-e4 text-e1 flex items-center text-xl font-roboto px-9 ">
            "convertirnos en el proveedor líder en mensajería y logística en la
            región, siendo reconocidos por nuestro profesionalismo y nuestra
            atención al cliente."
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
