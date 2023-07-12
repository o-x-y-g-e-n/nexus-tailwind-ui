import React from "react";

const Card1 = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden max-w-md mx-auto">
      <div
        className="bg-cover bg-center h-48"
        style={{backgroundImage: "url('https://picsum.photos/500')"}}
      ></div>
      <div className="p-6">
        <h2 className="text-2xl lg:text-3xl font-bold mb-2">
          Navigating the Impact of Climate Change
        </h2>
        <p className="text-base lg:text-lg text-gray-700 mb-4">
          Through a combination of scientific analysis, real-life case studies,
          and forward-thinking perspectives, this captivating text provides a
          panoramic view of the effects of climate change on our planet.
        </p>
        <a
          
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg border border-blue-500 transition-all duration-200"
        >
          <span className="mr-2">Add to collection</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 00-1 1v6H4a1 1 0 100 2h5v6a1 1 0 102 0v-6h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card1;
