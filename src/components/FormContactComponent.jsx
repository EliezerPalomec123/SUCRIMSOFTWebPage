import React from "react";

export const FormContactComponent = () => {
  return (
    <>
      <form className=" flex flex-col items-center md:mt-5 xl:mt-0 xl:bg-gray-300 xl:py-10 xl:rounded-3xl">
        <div className="mb-5 w-9/10 md:w-8/10 lg:w-5/10 xl:w-8/10">
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border w-full  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:ring-blue"
            placeholder = "Escribe tu nombre"
          />
        </div>

        <div className="mb-5 w-9/10 md:w-8/10 lg:w-5/10 xl:w-8/10">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border w-full  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:ring-blue"
            placeholder="Escribe tu correo ej.name@flowbite.com"
            required
          />
        </div>

        <div className="mb-5 w-9/10 md:w-8/10 lg:w-5/10 xl:w-8/10">
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border w-full  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:ring-blue"
            placeholder="Asunto"
          />
        </div>

        <div className="mb-5 w-9/10 md:w-8/10 lg:w-5/10 xl:w-8/10">
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500"
            placeholder="Escribe aquí tu mensaje"
          ></textarea>
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar mensaje
        </button>
      </form>
    </>
  );
};
