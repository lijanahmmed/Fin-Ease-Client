import React from "react";

const Contact = () => {
  return (
    <div className="mt-20 w-11/12 md:w-10/12 mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold">Contact Us</h3>
        <p className="text-gray-400">
          Our team is here to help you with any questions, feedback, or suggestions
          to improve your financial journey.
        </p>
      </div>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 border border-purple-300 shadow-md shadow-purple-200 rounded-2xl mt-10 mx-auto">
        <div className="card-body">
          <fieldset className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full border border-gray-300 rounded-md p-2"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full border border-gray-300 rounded-md p-2"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="label">Phone Number</label>
              <input
                type="tel"
                className="input w-full border border-gray-300 rounded-md p-2"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label className="label">Message</label>
              <textarea
                className="w-full h-32 border border-gray-300 rounded-md p-3"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button className="btn bg-gradient-to-r from-purple-800 to-purple-500 text-white w-full mt-4">
              Send Message
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Contact;
