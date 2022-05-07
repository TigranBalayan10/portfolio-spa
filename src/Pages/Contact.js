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
    <div class="flex items-center h-screen w-full bg-teal-lighter">
      <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <form class="mb-4 md:flex md:flex-wrap md:justify-between">
          <div class="flex flex-col mb-4 md:w-1/2">
            <label
              class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest"
              htmlFor="name"
            >
              Name
            </label>
            <input
              class="border py-2 px-3 text-grey-darkest md:mr-2"
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div class="flex flex-col mb-4 md:w-full">
            <label
              class="mb-2 uppercase font-bold text-lg text-grey-darkest"
              htmlFor="email"
            >
              Email
            </label>
            <input
              class="border py-2 px-3 text-grey-darkest"
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div class="flex flex-col mb-6 md:w-full">
            <label class="mb-2 uppercase font-bold text-lg text-grey-darkest">
              Messege
            </label>
            <textarea
              class="border py-2 px-3 text-grey-darkest"
              type="text"
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            ></textarea>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text text-red">{errorMessage}</p>
            </div>
          )}
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

{/* <form className="container" style={{ width: "50%" }} onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" class="form-label">
      Name:
    </label>
    <input
      type="text"
      name="name"
      class="form-control"
      defaultValue={name}
      onBlur={handleChange}
    />
  </div>
  <div class="mb-3">
    <label htmlFor="email" class="form-label">
      Email address:
    </label>
    <input
      type="email"
      name="email"
      class="form-control"
      defaultValue={email}
      onBlur={handleChange}
    />
  </div>
  <div class="mb-3">
    <label htmlFor="message">Message:</label>
    <textarea
      name="message"
      rows="5"
      class="form-control"
      defaultValue={message}
      onBlur={handleChange}
    />
  </div>
  {errorMessage && (
    <div>
      <p className="error-text text-danger">{errorMessage}</p>
    </div>
  )}
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>; */}
