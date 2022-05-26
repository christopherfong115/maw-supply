import React from "react";
import { ImInstagram, ImFacebook } from "react-icons/im";
import { useState } from "react";

const Footer = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("You have submitted.");
  };

  return (
    <>
      <div className="w-10/12 bg-slate-400 bg-opacity-20 rounded-2xl shadow-2xl min-h-[300px]">
        <div className="pt-10"></div>
        <div className="w-5/6 p-5 bg-amber-200 rounded-2xl shadow-2xl min-h-[300px] block">
          <form onSubmit={handleSubmit}>
            <div className="pt-4 pb-4 grid grid-cols-4">
              <div className="flex space-x-4">
                <label>First Name</label>
                <input
                  id="fName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex space-x-4">
                <label>Last Name</label>
                <input
                  id="fName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4 flex space-x-4">
              <label>E-Mail</label>
              <input
                id="fName"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <label>Message</label>
              <input
                id="fName"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              className="bg-white rounded-2xl p-2 mt-4 mb-4"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="flex space-x-4">
            <ImInstagram />
            <ImFacebook />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
