import React, { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

function ContactForm() {
  const API =
    "https://li87y3kq6a.execute-api.us-east-1.amazonaws.com/dev/email/send";

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [mentorship, setMentorship] = useState("Private Mentorship");

  const getName = (e) => {
    setName(e.target.value);
  };
  const getAge = (e) => {
    setAge(e.target.value);
  };
  const getPhoneNumber = (e) => {
    setPhone(e.target.value);
  };
  const getOccupation = (e) => {
    setOccupation(e.target.value);
  };
  const getMentorship = (e) => {
    setMentorship(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const payload = {
    name: name,
    email: email,
    content: {
      title: "Enquiry E-mail to Higher Touch Network",
      body: `Hi Uche, my name is ${name}.I am ${age} years old. My occupation is ${occupation}. I would like to enroll for the ${mentorship} package. You can reach me on this number : ${phone}`,
    },
  };

  function sendMail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_aydyvfl",
        "template_vqa6x4w",
        e.target,
        "user_rXVRHJW6N4xVZUrPrHEOa"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex justify-center my-16 ">
      <form className="sm:w-1/2 w-full px-4" onSubmit={sendMail}>
        <p className="mb-4 ">Name</p>
        <input
          onChange={getName}
          type="text"
          name="name"
          className="w-full p-4 bg-gray-200 mb-6"
        />
        <p className="mb-4 ">Email Address</p>
        <input
          onChange={getEmail}
          type="email"
          name="user_email"
          className="w-full p-4 bg-gray-200 mb-6"
        />
        <p className="mb-4 ">Phone Number</p>
        <input
          onChange={getPhoneNumber}
          type="text"
          name="user_number"
          className="w-full p-4 bg-gray-200 mb-6"
        />
        <p className="mb-4 ">Age</p>
        <input
          onChange={getAge}
          type="number"
          name="user_age"
          className="w-full p-4 bg-gray-200 mb-6"
        />
        <p className="mb-4 ">Occupation</p>
        <input
          onChange={getOccupation}
          type="text"
          name="user_occupation"
          className="w-full p-4 bg-gray-200 mb-6"
        />
        <p className="mb-4 ">Which mentorship package would you love</p>
        <div className="flex flex-col">
          <div className="w-full">
            <input
              type="radio"
              id="Private-Mentorship"
              name="mentorship_package"
              value="Private Mentorship"
              onChange={getMentorship}
              className="p-4 mr-4 bg-gray-200 mb-6"
            />
            <label className=" text-normal" for="Private-Mentorship">
              Private Mentorship
            </label>
          </div>
          <div className="w-full">
            <input
              type="radio"
              id="Personal-Coaching"
              name="mentorship_package"
              value="Personal Coaching"
              onChange={getMentorship}
              className="p-4 mr-4 bg-gray-200 mb-6"
            />
            <label className=" text-normal" for="Personal-Coaching">
              Personal Coaching
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <input
            type="submit"
            value="Submit Form"
            className="sm:py-6 py-4 sm:px-16 px-6 bg-[#FFD945]"
           
          />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };
