import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-11/12 md:w-10/12 mx-auto pt-10 pb-2">
      <div className="flex flex-col gap-10 md:flex-row justify-between">
        <div className="space-y-3">
          <div className="flex items-center">
            <img
              className="w-12 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT815NGXKz9w59G2GFzQbv18u8oXc0NxkLuLw&s"
              alt=""
            />
            <Link to="/" className="btn btn-ghost text-2xl">
              Fin Ease
            </Link>
          </div>
          <p>
            Fin Ease helps you track income, manage expenses, <br /> and achieve
            financial goals effortlessly with smart insights and secure control.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="space-y-2 mt-2">
            <li>
              <Link
                to="/about"
                className="text-gray-600 cursor-pointer hover:font-bold hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 cursor-pointer hover:font-bold hover:underline">
                Contact
              </Link>
            </li>
            <Link className="text-gray-600 cursor-pointer hover:font-bold hover:underline">
              Privacy Policy
            </Link>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">Social Media</h4>
          <div className="mt-2 flex gap-2">
            <FaInstagram size={24} />
            <FaFacebook size={24} />
            <FaXTwitter size={24} />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <hr />
        <p className="text-center text-gray-700">
          © {year} GreenNest. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
