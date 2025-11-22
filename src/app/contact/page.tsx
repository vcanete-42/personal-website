"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! Message sent successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-green-100">
      <section className="max-w-3xl mx-auto py-12 px-4 text-green-900">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="mb-8">
          Got a question, want to collaborate, or just want to say hi? Fill out the form below
          or reach me directly via email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={2}
              required
              className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}
