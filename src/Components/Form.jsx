import React, { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setPasswordError(""); // Clear password error when input changes
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (password === "") {
      setPasswordError("Please enter a password");
    } else {
      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        setSubmitMessage("Submitted successfully");
      }, 1000);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
       onSubmit={handleSubmit}
       method="POST"
    >
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
          htmlFor="password"
        >
          Password
        </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            placeholder="Password"
          />
          {passwordError && (
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        {submitMessage && (
            <div className="flex justify-center items-center mt-4">
            <p className="bg-green-500 text-white font-bold p-2">{submitMessage}</p>
      </div>
)}
      </form>
    </div>
  );
}
  
