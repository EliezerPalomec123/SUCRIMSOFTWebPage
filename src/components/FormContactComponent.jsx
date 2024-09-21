import React, { useState } from "react";
import axios from "axios";

export const FormContactComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [affair, setAffair] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      affair,
      message,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/message",
        data
      );
      if (response.status === 201) {
        console.log("Message sent successfully");
        setName("");
        setEmail("");
        setAffair("");
        setMessage("");
        setIsSuccess(true);
        setErrorMessage(""); // Limpiar el mensaje de error

        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        setErrorMessage("No se pudo entregar el mensaje.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("No se pudo entregar el mensaje.");
    }
  };

  return (
    <>
      <form
        className="flex flex-col items-center md:mt-5 xl:mt-0 xl:bg-gray-300 xl:py-10 xl:rounded-3xl"
        onSubmit={handleSubmit}
      >
        <div className="mb-5 w-9/10 md:w-8/10 lg:w-5/10 xl:w-8/10">
          <input
            type="text"
            name="name"
            id="base-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border-2 border-gray-300 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Escribe tu nombre"
            required
          />
        </div>

        <div className="mb-5 w-9/10 md:w-8/10 lg:w-5/10 xl:w-8/10">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border-2 border-gray-300 w-full text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Escribe tu correo ej.name@flowbite.com"
            required
          />
        </div>

        <div className="mb-5 w-9/10 md:w-8/10 lg:w-5/10 xl:w-8/10">
          <input
            type="text"
            name="affair"
            id="affair-input"
            value={affair}
            onChange={(e) => setAffair(e.target.value)}
            className="bg-gray-50 border-2 w-full border-gray-300 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Asunto"
            required
          />
        </div>

        <div className="mb-5 w-9/10 md:w-8/10 lg:w-5/10 xl:w-8/10">
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Escribe aquí tu mensaje"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar mensaje
        </button>

        {isSuccess && (
          <p className="mt-4 text-green-600 font-bold text-[1.2rem]">El mensaje se ha enviado con éxito!</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500">{errorMessage}</p>
        )}
      </form>
    </>
  );
};
