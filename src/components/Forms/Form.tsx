import React, { useState, FormEvent } from "react";


interface Errors {
  fullName?: string;
  password?: string;
  email?: string;
}

function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors: Errors = {};

    if (fullName.trim() === "") {
      errors.fullName = "Full Name is required";
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
    } else if (!email.includes("@") || !email.includes(".")) {
      errors.email = "Invalid email format";
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully");
      const userData={
        fullName: fullName,
        email: email,
        phoneNumber: (phoneNumber) ?? "not added",
      }
      localStorage.setItem("user", JSON.stringify(userData))
      window.location.pathname="/date"
      
  };
}

  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-black text-3xl" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-6">Register</h2>

      <div className="mb-4">
        <label htmlFor="fullName" className="block font-medium mb-1">
          Full Name*
        </label>
        <input
          type="text"
          id="fullName"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          }`}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && (
          <p className="text-red-500 mt-1">{errors.fullName}</p>
        )}
      </div>

    
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email*
        </label>
        <input
          type="email"
          id="email"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block font-medium mb-1">
          Phone Number (Optional)
        </label>
        <input
          type="text"
          id="phoneNumber"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
