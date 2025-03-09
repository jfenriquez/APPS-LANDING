import React from "react";

const FormContact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-black">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 lg:p-10 flex flex-col lg:flex-row items-center gap-6">
        {/* Texto informativo */}
        <div className="text-center lg:text-left text-black w-full lg:w-1/2">
          <h1 className="text-2xl lg:text-3xl font-bold mb-3">
            FORMULARIO DE CONTACTO
          </h1>
          <p className="text-gray-700">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        {/* Formulario */}
        <div className="w-full lg:w-1/2">
          <form className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Ingresa tu email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">
                Mensaje
              </label>
              <textarea
                placeholder="Escribe tu mensaje"
                className="w-full px-4 py-2 border rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
