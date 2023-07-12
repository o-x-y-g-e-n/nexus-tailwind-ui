import React from "react";

const Card2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-lg shadow-lg p-6 space-y-4 md:space-y-0">
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img
          className="w-full h-48 object-cover rounded-lg"
          src="https://picsum.photos/400"
          alt="Blog Image"
        />
      </div>
      <div className="w-full md:w-2/3 md:ml-8 flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Knowledge nay estimable questions
          </h2>
          <p className="text-gray-600">
            Certainty listening no no behaviour existence assurance situation
            is. Because add why not esteems amiable him.
          </p>
          <div className="flex space-x-2">
            <div className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm">
              Tag 1
            </div>
            <div className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm">
              Tag 2
            </div>
            <div className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm">
              Tag 3
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <img
            className="w-10 h-10 rounded-full object-cover mr-4"
            src="https://picsum.photos/200"
            alt="Author Image"
          />
          <div>
            <p className="text-gray-800 font-medium">Written by John Doe</p>
            <p className="text-gray-600 text-sm">Posted on July 1, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card2;
