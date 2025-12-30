import React, { useState } from "react";

const RegistrationForm = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    qualify: "",
    courses: "",
    batch: "",
    city: "",
    subject: "",
    message: "",
    gender: "",
    skill: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = registerData.skill;
      if (checked) {
        temp.push(value);
        setRegisterData((previousData) => ({ ...previousData, [name]: temp }));
      } else {
        temp = Object.values(temp); //Convert to Array
        temp = temp.filter((word) => word !== value); //Remove the Undersired Value
        setRegisterData((previousData) => ({ ...previousData, [name]: temp }));
      }
    } else {
      setRegisterData((previousData) => ({ ...previousData, [name]: value }));
    }
  };

  const handleClearForm = () => {
    setRegisterData({
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      qualify: "",
      courses: "",
      batch: "",
      city: "",
      subject: "",
      message: "",

      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(registerData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center bg-blue-200">
        <div className="container p-2 bg-pink-200 ">
          <form onReset={handleClearForm} onSubmit={handleSubmit} className=" grid bg-blue-100 justify-center ms-80 p-5 h-147 w-180 border">
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={registerData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="text-primary mb-2 m-2 border text-center"
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={registerData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="text-primary mb-2 m-2 border text-center"
                required
              />
            </div>

            <div>
              <label htmlFor="dob">D.O.B.</label>
              <input
                type="dob"
                name="dob"
                id="dob"
                value={registerData.dob}
                onChange={handleChange}
                placeholder="dd/mm/yyyy"
                className="text-primary mb-2 m-2 border text-center"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="gender">Gender</label>
              
              <input
                className="m-1"
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={registerData.gender === "male"}
              
              />{" "}
              Male
              <input
                className="m-1"
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={registerData.gender === "female"}
              />{" "}
              Female
              <input
                className="m-1"
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={registerData.gender === "other"}
              />{" "}
              Other
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={registerData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="text-primary mb-2 m-2 border text-center"
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="qualify "> Qualification</label>
              <select
                className="m-2 border"
                name="qualify"
                id="qualify"
                onChange={handleChange}
                value={registerData.qualify}
                required
              >
                <option value="">--Select qualification--</option>
                <option value="high">High School</option>
                <option value="higher">Higher Secondary</option>
                <option value="ug">Under Graduate</option>
                <option value="pg">Post-Graduate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="courses "> Available Courses</label>
              <select
                className="m-2 border"
                name="courses"
                id="courses"
                onChange={handleChange}
                value={registerData.courses}
                required
              >
                <option value="">--Select courses--</option>
                <option value="fsd">Full Stack Development</option>
                <option value="ds">Data Science</option>
                <option value="da">Data Analyst</option>
                <option value="java">Java DSA</option>
                <option value="python">Python DSA</option>
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="batch">Prefered Batch</label>
              <input
                className="ms-2"
                type="checkbox"
                name="batch"
                value="morning"
                onChange={handleChange}
                checked={
                  Object.values(registerData.batch).find(
                    (word) => word === "morning"
                  )
                    ? true
                    : false
                }
              />{" "}
              Morning
              <input
                className="ms-1 "
                type="checkbox"
                name="batch"
                value="afternoon"
                onChange={handleChange}
                checked={
                  Object.values(registerData.batch).find(
                    (word) => word === "afternoon"
                  )
                    ? true
                    : false
                }
              />{" "}
              Afternoon
              <input
                className="m-1"
                type="checkbox"
                name="batch"
                value="evening"
                onChange={handleChange}
                checked={
                  Object.values(registerData.batch).find(
                    (word) => word === "evening"
                  )
                    ? true
                    : false
                }
              />{" "}
              Evening
              <input
                className="m-1"
                type="checkbox"
                name="batch"
                value="weekends"
                onChange={handleChange}
                checked={Object.values(registerData.batch).includes("weekends")}
              />{" "}
              Weekends
            </div>

            <div className=" flex gap-2 justify-center">
              <button type="reset" className="bg-red-600 rounded-xl w-30 p-0.5 hover:bg-red-800 hover:text-white">
                Clear Form
              </button>
              <button type="submit" className=" bg-green-600 w-30 rounded-xl p-0.5 hover:bg-green-800 hover:text-white">
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
