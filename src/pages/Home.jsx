import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import Carousel from "../components/carousel/Carousel";
import Service from "./Service";
function Home() {
  return (
    <section className="grid grid-cols-2">
      <div className=" max-w-screen-xl items-center justify-center flex flex-col text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-e2 md:text-5xl lg:text-6xl ">
          ¡Bienvenidos a Rapix!
        </h1>
        <p className="mb-8 text-lg font-normal text-e1 lg:text-xl sm:px-16 lg:px-48 ">
          En Rapix, nos dedicamos a la venta de productos de tecnología de alta{" "}
          calidad. Nuestro objetivo es ofrecer la mejor experiencia de compra a{" "}
          nuestros clientes.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-e2 hover:bg-e4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-e5"
          >
            Contactenos
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
