import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Form from "../components/form/Form";

function Contact() {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center space-y-14 mx-auto">
          <div className="flex flex-row items-center">
            <MapPin className="w-5 h-5" />
            <div className="ml-3">
              <p className="font-semibold">Direccion</p>
              <p>Jr jorge molina 1213 , urb el pinaculo , La victoria</p>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <Phone className="w-5 h-5" />
            <div className="ml-3">
              <p className="font-semibold">Telefono</p>
              <p>+51 935477896</p>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <Mail className="w-5 h-5" />
            <div className="ml-3">
              <p className="font-semibold">Contacto General</p>
              <p>Rapix@rapixsupport.com</p>
            </div>
          </div>
        </div>

        <Form />
      </div>
    </section>
  );
}

export default Contact;
