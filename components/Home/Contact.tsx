"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMesage] = useState<string>("");
  return (
    <div className="px-[7%] mt-20 mb-10 grid grid-cols-1 md:grid-cols-2 text-primary">
      <div className="md:pr-10">
        <h1 className="text-4xl font-[700]">Get in touch with us</h1>
        <p className="text-base my-3">
          URC is an organization that deals with the practical aspect of the
          theories that we learn in class
        </p>
        <div className="w-ful py-2 border-b-2 border-gray-200">
          <h1 className="text-xl font-[700]">LOCATION</h1>
          <p className="text-base">UENR, Sunyamni - Bono Region, Ghana</p>
        </div>
        <div className="w-ful py-2 border-b-2 border-gray-200">
          <h1 className="text-xl font-[700]">PHONE</h1>
          <p className="text-base">+233 57 666 7777</p>
        </div>
        <div className="w-ful py-2 border-b-2 border-gray-200">
          <h1 className="text-xl font-[700]">EMAIL</h1>
          <p className="text-base">uenrroboticsclub.innovate@gmail.com</p>
        </div>
      </div>
      <form className="bg-[#0c7aad]/30 p-8 rounded-lg">
        <div className="flex flex-col lg:flex-row items-center lg:gap-x-5">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            id="name"
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFullName(e.target.value)
            }
            className="flex-[1] w-full p-3 rounded-md outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="flex-[1] w-full p-3 rounded-md outline-none mt-3 lg:mt-0"
          />
        </div>
        <textarea
          placeholder="Message"
          name="message"
          id="message"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMesage(e.target.value)
          }
          className="flex-[1] w-full p-3 rounded-md outline-none my-3 h-[8rem]"
        />
        <button className="btn-round rounded-md mx-auto w-fit">
          <span>View All Events</span>
        </button>
      </form>
    </div>
  );
};
export default Contact;
