import React from "react";
import { Mailbox, Gift, Zap } from "lucide-react";

function Service() {
  return (
    <section className="flex flex-col  bg-e2 ">
      <h2 className="mb-44 mt-12 text-5xl font-bold  leading-none text-e5  md:text-5xl lg:text-6xl flex flex-col items-center">
        Nuestros servicios destacados
      </h2>
      <div className="flex flex-row justify-around mb-40">
        <div className="max-w-sm px-6 pt-6 justify-center items-center flex flex-col bg-e5 border border-gray-200 rounded-lg shadow ">
          <Mailbox className="mb-6 text-e2" size={48} />
          <h5 class="mb-6 text-xl flex justify-center font-bold tracking-tight text-e1">
            Servicios de Mensajería General
          </h5>
          <p className="mb-3 font-normal text-e1 ">
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
        <div className="max-w-sm px-6 pt-6 justify-center items-center flex flex-col bg-e5 border border-gray-200 rounded-lg shadow ">
          <Gift className="mb-6 text-e2" size={48} />
          <h5 class="mb-6 text-xl flex justify-center font-bold tracking-tight text-e1">
            Servicios Personalizados
          </h5>
          <p class="mb-3 font-normal text-e1 ">
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
        <div className="max-w-sm px-6 pt-6 justify-center items-center flex flex-col bg-e5 border border-gray-200 rounded-lg shadow ">
          <Zap className="mb-6 text-e2" size={48} />
          <h5 className="mb-6 text-xl flex justify-center font-bold tracking-tight text-e1">
            Servicios Express o de Emergencia
          </h5>
          <p className="mb-3 font-normal text-e1 ">
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
