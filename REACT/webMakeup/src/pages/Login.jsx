import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    
  };

  const handleClear = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="m-15 h-80 w-fit p-4 rounded-xl border-2 grid justify-between mx-auto"
      >
        <h1 className="text-4xl font-bold font-serif">Login</h1>

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
          <label className="font-serif" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" Enter your password"
            className="text-primary font-serif border rounded"
            required
          />
        </div>

        <div className="flex gap-4 w-max mt-4">
          <button
            type="submit"
            className="bg-blue-700 ms-3 rounded-xl w-20 h-8 border hover:bg-blue-500 text-white"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="bg-blue-700 rounded-xl w-20 h-8 border hover:bg-blue-500 text-white"
          >
            Clear
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
