import React, { useState } from "react";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (createPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", createPassword);

    
  };

  const handleClear = () => {
    setFullName("");
    setEmail("");
    setCreatePassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <form
        onSubmit={handleSignup}
        className="m-15 w-100 p-5 h-110 rounded-xl border-3 grid gap-4 justify-between mx-auto"
      >
        <h1 className="text-4xl font-serif mb-4">SignUp</h1>

        <div>
          <label className="font-serif" htmlFor="fullName">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder=" Enter your full name"
            className="text-primary font-serif border rounded"
            required
          />
        </div>

        <div>
          <label className="font-serif" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" Enter your email"
            className="text-primary font-serif border rounded"
            required
          />
        </div>

        <div>
          <label className="font-serif" htmlFor="createPassword">
            Create password:
          </label>
          <input
            type="password"
            id="createPassword"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
            placeholder=" Create your password"
            className="text-primary font-serif border rounded"
            required
          />
        </div>

        <div>
          <label className="font-serif" htmlFor="confirmPassword">
            Confirm password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder=" Confirm your password"
            className="text-primary font-serif border rounded"
            required
          />
        </div>

        <div className="flex gap-6 w-max m-2 ms-7">
          <button
            type="submit"
            className="bg-blue-700 h-10 rounded-xl w-20 border hover:bg-blue-500 text-white"
          >
            SignUp
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="bg-blue-700 h-10 rounded-xl w-20 border hover:bg-blue-500 text-white"
          >
            Clear
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
