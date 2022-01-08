import React from "react";

function ContactForm() {
  return (
    <div className="flex justify-center my-16 ">
      <form className="sm:w-1/2 w-full px-4" action="">
        <p className="mb-4 ">First Name</p>
        <input type="text" className="w-full p-4 bg-gray-200 mb-6" />
        <p className="mb-4 ">Last Name</p>
        <input type="text" className="w-full p-4 bg-gray-200 mb-6" />
        <p className="mb-4 ">Age</p>
        <input type="number" className="w-full p-4 bg-gray-200 mb-6" />
        <p className="mb-4 ">Occupation</p>
        <input type="text" className="w-full p-4 bg-gray-200 mb-6" />
        <p className="mb-4 ">Enquiry</p>
        <input type="text" className="w-full p-4 bg-gray-200 mb-6" />

        <div className="flex justify-end">
          <button className="sm:py-6 py-4 sm:px-16 px-6 bg-[#FFD945]">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
