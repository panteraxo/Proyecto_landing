import React from "react";

function Service() {
  return (
    <section className="grid grid-rows-2  bg-e2">
      <h2 className="mb-4 mt-12 text-5xl font-bold tracking-tight leading-none text-e5  md:text-5xl lg:text-6xl flex flex-col items-center w-full">
        Nuestros servicios destacados
      </h2>
      <div className="flex flex-row justify-around ">
        <div class="max-w-sm p-6 bg-e3 border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <h5 class="mb-2 text-2xl flex justify-center font-semibold tracking-tight text-e4">
              Servicios de Mensajería General
            </h5>
          </a>
          <p class="mb-3 font-normal text-e4 ">
            Entrega de documentos: Envío rápido de contratos, facturas,
            documentos legales, etc. <br />
            <br />
            Entrega de paquetes pequeños: Para negocios o particulares que
            requieren un envío ágil.
            <br />
            <br />
            Entrega urgente: Servicios de entrega el mismo día o dentro de pocas
            horas.
          </p>
        </div>
        <div class="max-w-sm p-6 bg-e3 border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <h5 class="mb-2 text-2xl flex justify-center font-semibold tracking-tight text-e4">
              Servicios Personalizados
            </h5>
          </a>
          <p class="mb-3 font-normal text-e4 ">
            Servicios de paquetería personalizada: Opción de empaques con diseño
            personalizado para regalos o productos. <br />
            <br />
            Mensajero fijo: Disponibilidad de un mensajero dedicado para una
            empresa o individuo en horarios específicos. <br />
            <br />
            Recoger y entregar: Recogida de artículos en un lugar y entrega en
            otro, como lavanderías o tiendas de reparación.
          </p>
        </div>
        <div class="max-w-sm p-6 bg-e3 border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <h5 class="mb-2 text-2xl flex justify-center font-semibold tracking-tight text-e4">
              Servicios Express o de Emergencia
            </h5>
          </a>
          <p class="mb-3 font-normal text-e4 ">
            Entrega en tiempo crítico: Paquetes que deben ser entregados en
            horas específicas (ideal para empresas).
            <br />
            <br />
            Entrega nocturna: Envíos fuera del horario comercial.
            <br />
            <br />
            Entrega en fines de semana y días festivos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;
