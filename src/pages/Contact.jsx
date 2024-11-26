import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Form from "../components/form/Form";
import fondo from "../assets/images/fondo.jpg";

function Contact() {
  return (
    <section id="contact" className="px-4 py-8 md:py-12 bg-e4 dark:bg-e3">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="flex flex-col rounded-lg justify-center space-y-8 h-screen w-full bg-cover "
          style={{ backgroundImage: `url(${fondo})` }}
        >
          <div className="flex items-center">
            <MapPin className="w-15 h-15 text-e2  text-primary" />
            <div className="ml-3">
              <p className="font-semibold text-e4 text-2xl">Dirección</p>
              <p className="text-e4">
                Jr Jorge Molina 1213, Urb El Pináculo, La Victoria
              </p>
            </div>
          </div>

          <div className="flex  items-center">
            <Phone className="w-15 h-15 text-e2 text-primary" />
            <div className="ml-3">
              <p className="font-semibold text-e5 text-2xl">Teléfono</p>
              <p className="text-e4">+51 935477896</p>
            </div>
          </div>

          <div className="flex items-center">
            <Mail className="w-5 h-5 text-e2 text-primary" />
            <div className="ml-3">
              <p className="font-semibold text-e4 text-2xl">Contacto General</p>
              <p className="text-e4">Rapix@rapixsupport.com</p>
            </div>
          </div>
        </div>

        <div className="bg-e2 dark:bg-e3 max-w-full max-h-full shadow-md rounded-lg p-6">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
