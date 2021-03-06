import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = e.target.value;
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="flex justify-center p-8">
      <div className="flex justify-center w-full md:w-1/2 p-4 bg-blue-900 rounded-3xl shadow-lg">
        <form className="w-full md:w-3/4 lg:w-3/4 p-4" onSubmit={handleSubmit}>
          <div className="p-3">
            <input
              className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="p-3">
            <input
              className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
              type="email"
              placeholder="Email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="p-3">
            <textarea
              className="resize-none rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56"
              placeholder="Message"
              name="message"
              defaultValue={message}
              onBlur={handleChange}
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text text-red  text-red-700">
                {errorMessage}
              </p>
            </div>
          )}
          <button
            className="w-full bg-gray-900 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded text-2xl"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
