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
    <form className="container" style={{ width: "50%" }} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" class="form-label">Name:</label>
        <input
          type="text"
          name="name"
          class="form-control"
          defaultValue={name}
          onBlur={handleChange}
        />
      </div>
      <div class="mb-3">
        <label htmlFor="email" class="form-label">Email address:</label>
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
    </form>
  );
}

export default Contact;

{/* <form style="width: 50%" class="container">
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Name</label>
  <input type="text" class="form-control" />
</div>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input
    type="email"
    class="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
  />
</div>
<div class="mb-3">
  <textarea
    class="form-control"
    placeholder="Leave a comment here"
  ></textarea>
</div>

<button type="submit" class="btn btn-primary">Submit</button>
</form> */}
