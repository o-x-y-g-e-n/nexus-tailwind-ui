import React from "react"

const Card10 = () => {
  return (
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="bg-blue-500 px-4 py-3">
        <h2 class="text-lg font-semibold text-white">Setup Meeting</h2>
      </div>
      <div class="p-4">
        <div class="mb-4">
          <label for="title" class="text-sm font-medium text-gray-800">
            Title
          </label>
          <input
            id="title"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="description" class="text-sm font-medium text-gray-800">
            Description
          </label>
          <textarea
            id="description"
            class="w-full px-3 py-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-4">
          <label class="text-sm font-medium text-gray-800">Invites</label>
          <div class="flex items-center mt-1 space-x-2">
            <img
              src="https://picsum.photos/500"
              alt="Avatar 1"
              class="w-8 h-8 rounded-full"
            />
            <img
              src="https://picsum.photos/500"
              alt="Avatar 2"
              class="w-8 h-8 rounded-full"
            />
            <img
              src="https://picsum.photos/500"
              alt="Avatar 3"
              class="w-8 h-8 rounded-full"
            />
          </div>
        </div>
        <div class="mb-4">
          <label for="location" class="text-sm font-medium text-gray-800">
            Location
          </label>
          <select
            id="location"
            class="w-full px-3 py-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="zoom">Zoom</option>
            <option value="google-meet">Google Meet</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="notes" class="text-sm font-medium text-gray-800">
            Notes
          </label>
          <textarea
            id="notes"
            class="w-full px-3 py-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows="2"
          ></textarea>
        </div>
        <div>
          <button class="bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium">
            Schedule Meeting
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card10
