import React from "react";
import { Meteors } from "@/components/ui/meteors";

export default function ContactUs() {
  return (
<div className="min-h-screen bg-gray-900 py-12 pt-36">
  <div className="relative w-full">
    {/* Removed Background gradient and meteor effect behind the form */}
    <Meteors number={50} />
    
    {/* Contact form container */}
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-8 py-12 shadow-xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        <p className="mt-2 text-gray-400">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-blue-600 to-teal-600 px-6 py-3 font-medium text-white hover:from-blue-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="mt-8 text-center text-sm text-gray-400">
        <p>Alternatively, email us at</p>
        <a href="mailto:contact@example.com" className="text-teal-400 hover:underline">
          contact@example.com
        </a>
      </div>
    </div>
  </div>
</div>
  );
}