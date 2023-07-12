import React from "react"

const Card14 = () => {
  return (
    <div class="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold mb-4">Push Changes to Production</h2>
      <div class="flex items-center mb-4">
        <img
          src="https://picsum.photos/200"
          alt="User Avatar"
          class="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3 class="text-sm font-semibold">Assignee</h3>
          <p class="text-gray-300">John Doe</p>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="text-sm font-semibold">Description</h3>
        <p class="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          consequat magna.
        </p>
      </div>
      <div class="flex justify-between">
        <div>
          <h3 class="text-sm font-semibold">Status</h3>
          <p class="text-gray-300">In Progress</p>
        </div>
        <div class="mr-16">
          <h3 class="text-sm font-semibold">Points</h3>
          <p class="text-gray-300">5</p>
        </div>
      </div>
    </div>
  )
}

export default Card14
