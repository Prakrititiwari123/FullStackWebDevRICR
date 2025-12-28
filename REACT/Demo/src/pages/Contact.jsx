import React from "react";
import { useState } from "react";
const Contact = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );

      const data = {
        Name,
        email,
        message,
      };
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }

    handleClearForm();
  };

  return (
    <>
      <div className="text-warning fs-2 text-center">This is my Contact</div>

      <div className="text-center">
        <h1>Contact us</h1>
        <div className="container">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="Name"
                id="Name"
                value={Name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter ur name"
                className="text-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter ur email"
                className="text-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Enter ur message"
                className="text-primary"
                required
              ></textarea>
            </div>
            <div>
              <button type="reset" className="btn btn-danger">
                Clear Form
              </button>
              <button type="submit" className="btn btn-success">
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
