import React from "react";

const Login = () => {
  
  return (
    <>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={fullName}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter ur fullName"
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
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter ur email"
          className="text-primary"
          required
        />
      </div>
    </>
  );
};

export default Login;
