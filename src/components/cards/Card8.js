import React from "react"

const Card8 = () => {
  return (
    <section>
      <div className="flex items-start space-x-4">
        <img
          src="https://picsum.photos/200"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="bg-gray-100 px-4 py-3 rounded-lg">
          <div className="flex items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-800">Username</h3>
            <span className="text-xs text-gray-500 ml-2">3:30 PM</span>
          </div>
          <p className="text-sm text-gray-600">Message content goes here.</p>
        </div>
      </div>
      <div class="flex items-start space-x-4 justify-end">
        <div class="bg-gray-100 px-4 py-3 rounded-lg">
          <div class="flex items-center mb-2">
            <h3 class="text-sm font-semibold text-gray-800">Username</h3>
            <span class="text-xs text-gray-500 ml-2">3:30 PM</span>
          </div>
          <p class="text-sm text-gray-600">Message content goes here.</p>
        </div>
        <img
          src="https://picsum.photos/200"
          alt="Profile"
          class="w-10 h-10 rounded-full"
        />
      </div>
    </section>
  )
}
export default Card8
