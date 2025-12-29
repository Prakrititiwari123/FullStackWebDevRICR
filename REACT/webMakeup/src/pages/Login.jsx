import React from "react";

const Login = () => {
  return (
    <>
      <div className="m-15  w-fit p-5 rounded-xl border grid gap-4 justify-between mx-auto ">
        <h1 className="text-5xl">Login</h1>
        <div>
          <label htmlFor="fullName">Full Name: </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            // value={fullName}
            // onChange={(event) => setName(event.target.value)}
            placeholder="  Enter your fullName"
            className="text-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            // value={email}
            // onChange={(event) => setName(event.target.value)}
            placeholder="  Enter your email"
            className="text-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            // value={password}
            // onChange={(event) => setName(event.target.value)}
            placeholder="  Enter your password"
            className="text-primary"
            required
          />
        </div>
        <div className="flex gap-18 w-max">
          <button className="bg-blue-700 rounded-xl w-20 border hover:bg-blue-500 ">
            Login
          </button>
          <button className="bg-blue-700 rounded-xl w-20 border hover:bg-blue-500 text-black ">
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
