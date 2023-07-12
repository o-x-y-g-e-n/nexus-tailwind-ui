import React from "react";

const Header = () => {
  return (
    <section className="shadow-lg rounded-lg p-4">
      <div className="relative shadow-lg rounded-lg">
        <div
          className="h-80 bg-cover bg-center"
          style={{backgroundImage: "url('https://picsum.photos/800"}}
        >
          <div className="absolute bottom-0 left-4 sm:left-16 translate-y-1/2 transform">
            <img
              src="https://picsum.photos/200"
              alt="Profile Picture"
              className="h-24 w-24 rounded-full border-4 border-white"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 ml-4 sm:ml-16  w-full">
        <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
        <p className="text-base font-medium text-gray-400">Baltimore, Maryland</p>
        <div className="flex items-center flex-wrap mt-2">
          <span className="text-sm font-medium text-gray-600 flex items-center">
            Male
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
          </span>
          <span className="text-sm font-medium text-gray-600">
            English, Spanish & Hindi
          </span>
        </div>
        <div className="flex mt-2">
          <div className="flex mt-2">
            <button className="py-2 px-8 rounded-md bg-blue-500 text-white text-base mr-2">
              Message
            </button>
            <button className="py-2 px-6 rounded-md border border-blue-500 text-blue-500 text-base">
              Share Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
