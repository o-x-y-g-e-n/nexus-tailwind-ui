import React from "react"

const Card11 = () => {
  return (
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="bg-teal-500 px-4 py-3 ">
        <h2 class="text-lg font-semibold text-white">Event Details</h2>
      </div>
      <div class="">
        <div class="bg-gradient-to-r p-4 from-blue-300 via-green-200 to-yellow-300 mb-4">
          <div class="mb-4 ">
            <h3 class="text-sm font-medium text-gray-800">Meeting Title</h3>
          </div>
          <div class="flex mb-4">
            <svg
              fill="none"
              class="h-6 w-6"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p class="text-sm text-gray-600 ml-2 flex items-center">
              Tuesday, July 6, 2023 | 3:30 PM
            </p>
          </div>

          <div class="mb-4">
            <button class="bg-teal-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-teal-600 transition duration-300">
              Join with Google Meet
            </button>
            <button class="border border-gray-300 text-gray-500 py-2 px-4 rounded-md text-sm font-medium ml-2 hover:bg-gray-100 transition duration-300">
              Copy Link
            </button>
          </div>
        </div>
        <div class="mb-2 ml-4">
          <h3 class="text-sm font-medium text-gray-800">Invites</h3>
          <div class="flex items-center mt-2 space-x-2">
            <img
              src="https://picsum.photos/200"
              alt="Avatar 1"
              class="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://picsum.photos/200"
              alt="Avatar 2"
              class="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="https://picsum.photos/200"
              alt="Avatar 3"
              class="w-8 h-8 rounded-full border-2 border-white"
            />
          </div>
        </div>
        <div class="mt-4 mb-2 ml-4">
          <h3 class="text-sm font-medium text-gray-800">Agenda</h3>
          <ul class="list-disc list-inside mt-2 text-sm text-gray-600">
            <li class="mb-2">
              <span class="inline-block bg-blue-100 text-blue-500 text-sm px-2 py-1 rounded-md mr-2">
                Team Meeting
              </span>
              <span class="inline-block bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                Project
              </span>
            </li>
            <li class="mb-2">
              <span class="inline-block bg-blue-100 text-blue-500 text-sm px-2 py-1 rounded-md mr-2">
                Presentation
              </span>
              <span class="inline-block bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                Marketing
              </span>
            </li>
            <li class="mb-2">
              <span class="inline-block bg-blue-100 text-blue-500 text-sm px-2 py-1 rounded-md mr-2">
                Brainstorming Session
              </span>
              <span class="inline-block bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                Creative
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card11
