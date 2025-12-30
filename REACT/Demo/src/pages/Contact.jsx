import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = contactData.skill;
      if (checked) {
        temp.push(value);
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      } else {
        temp = Object.values(temp); //Convert to Array
        temp = temp.filter((word) => word !== value); //Remove the Undersired Value
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      }
    } else {
      setContactData((previousData) => ({ ...previousData, [name]: value }));
    }
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(contactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center">
        <h1>Contact Us</h1>
        <div className="container p-2 ">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="text-primary mb-2 m-2"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="text-primary mb-2 m-2"
              />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="text-primary mb-2 m-2"
              />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={contactData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="text-primary mb-2 m-2"
              />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="text-primary mb-2 m-2"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="religion "> Religion</label>
              <select
                className="m-2"
                name="religion"
                id="religion"
                onChange={handleChange}
                value={contactData.religion}
              >
                <option value="">--Select Religion--</option>
                <option value="islam">Islam</option>
                <option value="hinduism">Hinduism</option>
                <option value="christianity">Christianity</option>
                <option value="buddhism">Buddhism</option>
                <option value="jainism">Jainism</option>
                <option value="sikhism">Sikhism</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-2">
              <label htmlFor="gender">Gender</label>
              <input
                className="m-1"
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={contactData.gender === "male"}
              />{" "}
              Male
              <input
                className="m-1"
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={contactData.gender === "female"}
              />{" "}
              Female
              <input
                className="m-1"
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={contactData.gender === "other"}
              />{" "}
              Other
            </div>

            <div className="mb-2">
              <label htmlFor="skill">Skill known</label>
              <input
                className="ms-2"
                type="checkbox"
                name="skill"
                value="html"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "html"
                  )
                    ? true
                    : false
                }
              />{" "}
              HTML
              <input
                className="ms-1 "
                type="checkbox"
                name="skill"
                value="css"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "css"
                  )
                    ? true
                    : false
                }
              />{" "}
              CSS
              <input
                className="m-1"
                type="checkbox"
                name="skill"
                value="js"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find((word) => word === "js")
                    ? true
                    : false
                }
              />{" "}
              JS
              <input
                className="m-1"
                type="checkbox"
                name="skill"
                value="react"
                onChange={handleChange}
                checked={Object.values(contactData.skill).includes("react")}
              />{" "}
              React
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                className="text-primary ms-2 mb-2 text-center"
              ></textarea>
            </div>
            <div className="m-2 p-2">
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

// import React from "react";
// import { useState } from "react";
// const Contact = () => {
//   const [Name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const [isLoading, setIsLoading] = useState(false);

//   const handleClearForm = () => {
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         "https://official-joke-api.appspot.com/jokes/random"
//       );

//       const data = {
//         Name,
//         email,
//         message,
//       };
//       console.log(data);
//     } catch (error) {
//       console.log(error.message);
//     } finally {
//       setIsLoading(false);
//     }

//     handleClearForm();
//   };

//   return (
//     <>
//       <div className="text-warning fs-2 text-center">This is my Contact</div>

//       <div className="text-center">
//         <h1>Contact us</h1>
//         <div className="container">
//           <form onReset={handleClearForm} onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="Name">Name</label>
//               <input
//                 type="text"
//                 name="Name"
//                 id="Name"
//                 value={Name}
//                 onChange={(event) => setName(event.target.value)}
//                 placeholder="Enter ur name"
//                 className="text-primary"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="religion">Religion</label>
//               <select name="religion" id="religion" onChange={handleSubmit}>

//                 <option value="">--Select religion</option>
//                 <option value="islam">Islam</option>
//                 <option value="hinduism">Hinduism</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="gender">Gender</label>
//               <input type="radio" name="gender" id=""  onChange={handleSubmit} />Male
//               <input type="radio" name="gender" id=""  onChange={handleSubmit} />female
//             </div>

//             <div>
//               <label htmlFor="skills">skills</label>
//               <input type="checkbox" name="skills" id="skills" onChange={handleSubmit}/>HTML
//               <input type="checkbox" name="skills" id="skills" onChange={handleSubmit}/>HTML
//               <input type="checkbox" name="skills" id="skills" onChange={handleSubmit}/>HTML
//               <input type="checkbox" name="skills" id="skills" onChange={handleSubmit}/>HTML
//             </div>

//             <div>
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 placeholder="Enter ur email"
//                 className="text-primary"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="message">Message</label>
//               <textarea
//                 name="message"
//                 id="message"
//                 value={message}
//                 onChange={(event) => setMessage(event.target.value)}
//                 placeholder="Enter ur message"
//                 className="text-primary"
//                 required
//               ></textarea>
//             </div>
//             <div>
//               <button type="reset" className="btn btn-danger">
//                 Clear Form
//               </button>
//               <button type="submit" className="btn btn-success">
//                 {isLoading ? "Loading" : "Submit"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Contact;
