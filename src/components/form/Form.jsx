import React from "react";

function Form() {
  return (
    <div className="flex flex-col items-center bg-e2">
      <h2 className="text-3xl mt-8 font-bold text-e4">
        Formulario de contacto
      </h2>
      <div class="w-3/4 my-8 p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <form class="max-w-xl mx-auto">
          <div class="mb-5">
            <label
              for="nombre"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Nombres
            </label>
            <input
              type="text"
              id="nombre"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="nombres"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="telefono"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Telefono
            </label>
            <input
              type="number"
              id="telefono"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Telefono"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-e1 text-sm rounded-lg  block w-full p-2.5 "
              placeholder="email@ejemplo.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Mensaje
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
              placeholder="Deje su comentario..."
            ></textarea>
          </div>

          <button
            type="submit"
            class="text-e5 bg-e1 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Enviar registro
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
