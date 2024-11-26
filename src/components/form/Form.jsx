import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col items-center bg-e2">
      <h2 className="text-3xl mt-8 font-bold text-e4">
        Formulario de contacto
      </h2>
      <div class="w-3/4 my-8 p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <form onSubmit={handleSubmit(onSubmit)} class="max-w-xl mx-auto">
          <div>
            <label className="block mb-1">Nombre:</label>
            <input
              type="text"
              {...register("nombre", {
                required: "El nombre es obligatorio",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "El nombre no puede tener más de 50 caracteres",
                },
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\s]+$/,
                  message: "El nombre solo puede contener letras y espacios",
                },
              })}
              className="border border-gray-300 p-2 w-full rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">Teléfono:</label>
            <input
              type="text"
              {...register("phone", {
                required: "El teléfono es obligatorio",
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: "El teléfono debe tener exactamente 9 dígitos",
                },
              })}
              className="border border-gray-300 p-2 w-full rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Correo electrónico
            </label>
            <input
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "El correo no es valido",
                },
              })}
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-e1 text-sm rounded-lg  block w-full p-2.5 "
              placeholder="email@ejemplo.com"
              required
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Mensaje
            </label>
            <textarea
              {...register("message")}
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
