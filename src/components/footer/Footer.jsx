import React, { useState } from "react";
import logo2 from "../../assets/images/logo2.png";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <footer class="bg-e3 dark:bg-e1">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="#" class="flex items-center">
              <img src={logo2} class=" me-3 h-56 w-96" alt="rapix Logo" />
            </a>
          </div>
          <div class="sm:flex sm:items-center sm:justify-between">
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-e2 sm:mb-0 ">
              <li>
                <a href="#home" class="hover:underline me-4 md:me-6">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#service" class="hover:underline me-4 md:me-6">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#aboutus" class="hover:underline me-4 md:me-6">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#testimonial" class="hover:underline me-4 md:me-6">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contact" class="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-6 border-e2 sm:mx-auto  lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-e2 sm:text-center ">
            © 2024{" "}
            <a href="https://mgdsdeveloper.com/" class="hover:underline">
              MGDSDeveloper™
            </a>
            . All Rights Reserved.
          </span>

          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <p className="mr-4 ">
              <button onClick={toggleModal} className="text-e3 dark:text-e2">
                Términos y Servicios
              </button>
            </p>
            {isModalOpen && (
              <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex overflow-auto  items-center justify-center z-50">
                <div className="bg-white p-8 rounded-lg w-4/5 ">
                  <h2 className="text-2xl font-bold">Términos y Servicios</h2>
                  <p>
                    Términos y Condiciones de Servicio - Rapix <br />
                    1. Aceptación de los Términos Al utilizar los servicios de
                    Rapix, usted acepta los términos y condiciones establecidos
                    en este acuerdo. Si no está de acuerdo con alguna de las
                    condiciones, no utilice nuestros servicios.
                    <br /> 2. Descripción del Servicio Rapix es una plataforma
                    de mensajería y entrega que facilita la conexión entre los
                    usuarios y nuestros mensajeros para el envío y recepción de
                    paquetes dentro de las áreas geográficas de operación.
                    <br /> 3. Registro de Usuario Para utilizar los servicios de
                    Rapix, los usuarios deben crear una cuenta proporcionando
                    información veraz y actualizada. El usuario es responsable
                    de mantener la confidencialidad de sus credenciales y de
                    todas las actividades realizadas en su cuenta.
                    <br /> 4. Tarifas y Pagos Los precios por el servicio de
                    mensajería varían según el tipo de envío, el peso del
                    paquete y la distancia de entrega. Los pagos se realizarán a
                    través de la plataforma utilizando los métodos de pago
                    disponibles. Rapix se reserva el derecho de modificar las
                    tarifas en cualquier momento, notificando a los usuarios con
                    antelación.
                    <br /> 5. Uso Aceptable El usuario se compromete a no
                    utilizar los servicios de Rapix para el envío de artículos
                    ilegales, peligrosos o prohibidos. Cualquier infracción
                    podrá resultar en la cancelación de la cuenta y en acciones
                    legales si corresponde.
                    <br /> 6. Responsabilidad Rapix se compromete a entregar los
                    paquetes dentro del plazo estimado, pero no garantiza un
                    tiempo exacto debido a factores fuera de su control
                    (tráfico, condiciones climáticas, etc.). En caso de daño o
                    pérdida de un paquete, Rapix ofrece un proceso de
                    reclamación que se revisará según las políticas internas.
                    <br /> 7. Propiedad Intelectual Todos los derechos sobre el
                    contenido, diseño y software de la plataforma Rapix son
                    propiedad exclusiva de la empresa y están protegidos por las
                    leyes de propiedad intelectual. No se permite la
                    reproducción, distribución o uso no autorizado de dichos
                    materiales.
                    <br /> 8. Modificación de los Términos Rapix se reserva el
                    derecho de modificar estos términos en cualquier momento.
                    Las modificaciones se aplicarán a partir de su publicación
                    en la plataforma. Es responsabilidad del usuario revisar
                    periódicamente los términos para estar al tanto de cualquier
                    cambio.
                    <br /> 9. Privacidad El uso de la plataforma está sujeto a
                    nuestra Política de Privacidad, que describe cómo
                    recopilamos, utilizamos y protegemos la información personal
                    de los usuarios.
                    <br /> 10. Terminación Rapix puede suspender o cancelar el
                    acceso de un usuario a la plataforma en caso de violación de
                    los términos o por cualquier otra razón que considere
                    necesaria para proteger el buen funcionamiento de los
                    servicios.
                    <br /> 11. Ley Aplicable Este acuerdo se regirá por las
                    leyes del país en el que Rapix opera. Cualquier disputa
                    relacionada con los servicios de Rapix será resuelta en los
                    tribunales competentes de dicha jurisdicción.
                    <br /> 12. Contacto Para cualquier pregunta o aclaración
                    sobre estos Términos y Condiciones, puede contactarnos a
                    través de nuestro servicio de atención al cliente en
                    contacto@rapix.com.
                  </p>
                  <button
                    onClick={toggleModal}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
            <a
              href="https://www.facebook.com/maki.ds.9/"
              class="text-e2 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>

            <a
              href="https://x.com/maki70603229"
              class="text-e2 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
            <a
              href="https://github.com/panteraxo"
              class="text-e2 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
