import React, { useState } from "react";

const TwoWayBinding = () => {
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setTitle('')
  };
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            type="text"
            placeholder="type here"
            className=" bg-pink-100 text-center border rounded m-5"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <button className="border ms-15 p-1 rounded m-5 hover:bg-gray-600 hover:text-white">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default TwoWayBinding;
