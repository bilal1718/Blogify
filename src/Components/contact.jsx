import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }
  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTimeout(()=>{
        setSubmitMessage("Your message has been submitted successfully")
    },1000)
  }

  return (
    <>
    <div className="flex justify-center items-center h-screen">
      <form
       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
       onSubmit={handleSubmit}
       method="POST"
    >
        <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="text"
        >
          Name
        </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="text"
            type="text"
            name="text"
            onChange={handleNameChange}
            value={name}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="text"
        >
          Subject
        </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="text"
            type="text"
            name="text"
            onChange={handleSubjectChange}
            value={subject}
            placeholder="Subject"
          />
          </div>
          <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="text"
        >
          Message
        </label>
        <textarea name={message} onChange={handleMessageChange} rows="7" cols="25" />
          </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send
          </button>
        </div>
        {submitMessage && (
            <div className="flex justify-center items-center mt-4">
            <p className="bg-green-500 text-white font-bold p-2">{submitMessage}</p>
      </div>
)}
      </form>
    </div>
    </>
  );
}
