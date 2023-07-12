import React from "react"

const Card7 = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-md shadow-lg overflow-hidden">
      <div className="bg-blue-500 px-4 py-3">
        <h2 className="text-lg font-semibold text-white">Friend Request</h2>
      </div>
      <div className="px-4 py-3">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src="https://picsum.photos/400"
            alt="Profile"
          />
          <div>
            <h3 className="text-base font-semibold">John Doe</h3>
            <p className="text-sm text-gray-600">Mutual Friend</p>
          </div>
        </div>
        <div className="mt-3">
          <button className="bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-medium">
            Confirm
          </button>
          <button className="border border-blue-500 text-blue-500 rounded-full px-4 py-2 ml-2 text-sm font-medium">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card7;