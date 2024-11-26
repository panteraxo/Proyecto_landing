import React from "react";
import gif1 from "../assets/images/gif/gif1.gif";
import gif2 from "../assets/images/gif/gif2.gif";

function AboutUs() {
  return (
    <section id="aboutus" className="w-11/12 mx-auto dark:bg-e3">
      <div className="grid  grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-6">
        <div className="bg-e5 dark:bg-e3 p-6 flex flex-col items-center justify-center">
          <p className="text-e1 dark:text-e5 text-4xl sm:text-5xl md:text-7xl font-roboto font-bold mb-6 text-center">
            Nuestra misión:
          </p>
          <p className="text-e1 dark:text-e5 text-base sm:text-lg md:text-xl font-roboto px-4 sm:px-9 text-center">
            "Simplificar la vida de nuestros clientes ofreciendo servicios de
            alta calidad que combinen innovación, eficiencia y confianza."
          </p>
        </div>

        <div className="bg-e5 dark:bg-e3 flex justify-center">
          <img
            src={gif1}
            alt="Gif de misión"
            className="w-full dark:bg-e3 max-w-sm md:max-w-md rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-6 mt-8">
        <div className="bg-e5 dark:bg-e3 flex justify-center">
          <img
            src={gif2}
            alt="Gif de visión"
            className="w-full max-w-sm md:max-w-md rounded-lg"
          />
        </div>

        <div className="bg-e5 p-6 dark:bg-e3 flex flex-col items-center justify-center">
          <p className="text-e1 dark:text-e5  text-4xl sm:text-5xl md:text-7xl font-roboto font-bold mb-6 text-center">
            Nuestra visión:
          </p>
          <p className="text-e1 dark:text-e5 text-base sm:text-lg md:text-xl font-roboto px-4 sm:px-9 text-center">
            "Convertirnos en el proveedor líder en mensajería y logística en la
            región, siendo reconocidos por nuestro profesionalismo y nuestra
            atención al cliente."
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
