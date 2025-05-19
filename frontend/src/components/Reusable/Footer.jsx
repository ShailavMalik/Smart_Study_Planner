import React from "react";

const Footer = () => {
  return (
    <div className="bg-white mt-auto z-0 w-screen  bg-gradient-to-br from-white via-[#c3dafe] to-[#a5b4fc] 
               shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:px-8">
        <p className="text-center text-gray-700">
          Made with ❤️ by {" "}
          <a className=" animate-pulse text-blue-950" href="shailavmalik.me" target="_blank">
             Shailav Malik
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
