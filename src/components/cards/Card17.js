import React from "react"

const Card17 = () => {
  return (
    <body className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
          <div
            className="h-0 pb-100% bg-center bg-no-repeat bg-contain"
            style={{backgroundImage: "url('https://picsum.photos/500')"}}
          ></div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Product Title</h3>
            <p className="text-gray-600 text-sm mb-4">
              Product Description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-1">
                &#9733;&#9733;&#9733;&#9733;&#9734;
              </span>
              <span className="text-gray-600 text-sm">(1234)</span>
            </div>
            <p className="text-gray-900 font-semibold mb-2">$99.99</p>
            <button className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Card17
