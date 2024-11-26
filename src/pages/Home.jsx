import React from "react";
import Carousel from "../components/carousel/Carousel";

function Home() {
  return (
    <section
      id="home"
      className="grid md:grid-cols-2 md:grid-rows-1 sm:grid-rows-2 sm:grid-cols-1"
    >
      <div className="max-w-screen-xl h-full my-44 sm:my-0 dark:bg-e3 items-center justify-center flex flex-col text-center px-4 sm:px-6 md:px-8">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-e2 sm:text-4xl md:text-5xl lg:text-6xl">
          ¡Bienvenidos a Rapix!
        </h1>
        <p className="mb-8 text-base font-normal text-e1 dark:text-e5 sm:text-lg md:text-xl sm:px-2">
          Conecta tus destinos con rapidez y confianza. En Rapix, ofrecemos
          <br />
          soluciones de mensajería personalizadas, entregas rápidas y seguras, y
          atención profesional para satisfacer todas tus necesidades de
          transporte de documentos y paquetes.
          <br /> ¡Descubre cómo podemos simplificar tu día!
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#contact"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-e2 hover:bg-e4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-e5"
          >
            Contáctenos
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      <Carousel />
    </section>
  );
}

export default Home;
