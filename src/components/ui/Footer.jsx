import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-30 bg-black text-white">
      <div className="flex w-10/12 mx-auto">
        <div className="w-4/12 mx-auto space-y-3">
          <h2 className="text-white text-4xl font-extrabold">DigiTools</h2>
          <p className="w-8/12 font-light text-white/70">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="w-2/12 mx-auto space-y-3">
          <h2 className="text-white">Product</h2>
          <ul className="flex flex-col gap-3.5 text-white/70">
            <li>Feature</li>
            <li>Priceing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="w-2/12 mx-auto space-y-3">
          <h2 className="text-white">Company</h2>
          <ul className="flex flex-col gap-3.5 text-white/70">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="w-2/12 mx-auto space-y-3">
          <h2 className="text-white">Resources</h2>
          <ul className="flex flex-col gap-3.5 text-white/70">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="w-2/12 mx-auto">
          <h2 className="text-white">Social Links</h2>
          <ul className="flex gap-3.5 mt-4">
            <li>
              <FaInstagram className="w-10 h-10 bg-white rounded-full text-black p-2" />
            </li>
            <li>
              <FaFacebookF className="w-10 h-10 bg-white rounded-full text-black p-2" />
            </li>
            <li>
              <FaXTwitter className="w-10 h-10 bg-white rounded-full text-black p-2" />
            </li>
          </ul>
        </div>
        <hr className="text-white" />
      </div>
    </div>
  );
};

export default Footer;
