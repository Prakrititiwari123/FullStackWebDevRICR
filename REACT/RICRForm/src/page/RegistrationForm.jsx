import React, { useState } from "react";

const RegistrationForm = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    qualify: "",
    courses: "",
    batch: [],
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
      let temp = [...registerData[name]];
      if (checked) {
        temp.push(value);
      } else {
        temp = temp.filter((item) => item !== value);
      }
      setRegisterData({ ...registerData, [name]: temp });
    } else {
      setRegisterData({ ...registerData, [name]: value });
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
      batch: [],
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
      handleClearForm();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Registration Form
        </h2>

        <form
          onSubmit={handleSubmit}
          onReset={handleClearForm}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
      
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={registerData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

   
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-600">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={registerData.dob}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              value={registerData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

  
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Gender
            </label>
            <div className="flex gap-6">
              {["male", "female", "other"].map((g) => (
                <label key={g} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={registerData.gender === g}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  <span className="capitalize">{g}</span>
                </label>
              ))}
            </div>
          </div>

       
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Qualification
            </label>
            <select
              name="qualify"
              value={registerData.qualify}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            >
              <option value="">Select qualification</option>
              <option value="high">High School</option>
              <option value="higher">Higher Secondary</option>
              <option value="ug">Under Graduate</option>
              <option value="pg">Post Graduate</option>
            </select>
          </div>


          <div>
            <label className="block text-sm font-medium text-gray-600">
              Courses
            </label>
            <select
              name="courses"
              value={registerData.courses}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            >
              <option value="">Select course</option>
              <option value="fsd">Full Stack Development</option>
              <option value="ds">Data Science</option>
              <option value="da">Data Analyst</option>
              <option value="java">Java DSA</option>
              <option value="python">Python DSA</option>
            </select>
          </div>

       
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Preferred Batch
            </label>
            <div className="flex flex-wrap gap-4">
              {["morning", "afternoon", "evening", "weekends"].map((b) => (
                <label key={b} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="batch"
                    value={b}
                    checked={registerData.batch.includes(b)}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  <span className="capitalize">{b}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center gap-6 mt-6">
            <button
              type="reset"
              className="px-8 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-8 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
