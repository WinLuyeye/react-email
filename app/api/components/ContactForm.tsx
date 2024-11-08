"use client";

import React, { useState } from "react";

interface SingUpFormProps {
  onSubmit: (email: string) => void;
}
const ContactForm: React.FC<SingUpFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      setIsSubmitted(true);
      onSubmit(email);
      setEmail("");
      setMessage(
        "Veuillez vérifier vos e-mail pour confirmer votre inscription"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[500px] mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <h2 className="text-xl font-bold mb-4">News Letter</h2>
      <div className="mb-4">
        <label htmlFor="email" className="bloc text-sm font-medium">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray rounded shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          type="submit"
          disabled={isSubmitted}
          className={`w-full ${
            isSubmitted ? "bg-gray-400" : "bg-indigo-400 hover:bg-indigo-600"
          } text-white py-2 px-4 rounded-md mt-4`}
        >
          Soumettre
        </button>
        {message && (
          <p className="text-center text-green-600 mt-4">{message}</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
