import React from "react";
import { Mailbox, Gift, Zap } from "lucide-react";

function Service() {
  return (
    <section id="service" className="flex flex-col bg-e2 px-4">
      <h2 className="mb-16 mt-12 text-4xl font-bold text-center text-e5 sm:text-5xl md:text-6xl">
        Nuestros servicios destacados
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        <div className="max-w-sm mx-auto px-6 pt-6 flex flex-col items-center bg-e5 border dark:bg-e3 dark:border-e3 border-gray-200  rounded-lg shadow">
          <Mailbox className="mb-6 text-e2 dark:text-e5" size={48} />
          <h5 className="mb-4 text-lg font-bold tracking-tight text-e1 dark:text-e5 sm:text-xl">
            Servicios de Mensajería General
          </h5>
          <p className="text-sm text-e1 dark:text-e5 sm:text-base">
            Entrega de documentos: Envío rápido de contratos, facturas,
            documentos legales, etc. <br />
            <br />
            Entrega de paquetes pequeños: Para negocios o particulares que
            requieren un envío ágil. <br />
            <br />
            Entrega urgente: Servicios de entrega el mismo día o dentro de pocas
            horas.
          </p>
        </div>

        <div className="max-w-sm mx-auto px-6 pt-6 flex flex-col items-center bg-e5 border dark:bg-e3 dark:border-e3 border-gray-200 rounded-lg shadow">
          <Gift className="mb-6 text-e2 dark:text-e5" size={48} />
          <h5 className="mb-4 text-lg font-bold tracking-tight text-e1 dark:text-e5 sm:text-xl">
            Servicios Personalizados
          </h5>
          <p className="text-sm text-e1 dark:text-e5 sm:text-base">
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

        <div className="max-w-sm mx-auto px-6 pt-6 flex flex-col items-center bg-e5 border dark:bg-e3 dark:border-e3 border-gray-200 rounded-lg shadow">
          <Zap className="mb-6 text-e2 dark:text-e5" size={48} />
          <h5 className="mb-4 text-lg font-bold tracking-tight text-e1 dark:text-e5 sm:text-xl">
            Servicios Express o de Emergencia
          </h5>
          <p className="text-sm text-e1 dark:text-e5 sm:text-base">
            Entrega en tiempo crítico: Paquetes que deben ser entregados en
            horas específicas (ideal para empresas). <br />
            <br />
            Entrega nocturna: Envíos fuera del horario comercial. <br />
            <br />
            Entrega en fines de semana y días festivos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;
