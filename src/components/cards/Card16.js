import React from "react"

const Card16 = () => {
  return (
    <body className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Food Image"
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Hotel Menu Item</h3>
            <p className="text-gray-600 mb-4">
              Delicious description of the menu item. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-bold">$15</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}
export default Card16
