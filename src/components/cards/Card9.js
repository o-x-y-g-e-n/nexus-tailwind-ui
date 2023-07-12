import React from "react"

const Card9 = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-500 px-4 py-3">
        <h2 className="text-lg font-semibold text-white">Google Meeting</h2>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600">
          You are invited to join a Google Meeting:
        </p>
        <h3 className="text-base font-semibold text-gray-800 mt-2">
          Meeting Title
        </h3>
        <p className="text-sm text-gray-600 mt-2">Date: July 12, 2023</p>
        <p className="text-sm text-gray-600">Time: 10:00 AM - 11:00 AM</p>
        <p className="text-sm text-gray-600 mt-2">Meeting ID: 123456789</p>
        <p className="text-sm text-gray-600">Password: *******</p>
        <div className="mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Click here to join the meeting
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card9
