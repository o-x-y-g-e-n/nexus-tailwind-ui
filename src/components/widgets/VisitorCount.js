import React from "react"

const VisitorCount = () => {
  return (
    <body className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-4">Visitor Count</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-blue-500 text-white rounded-md">
              <p className="text-sm font-medium uppercase tracking-wider mb-1">
                Today
              </p>
              <p className="text-3xl font-bold">1234</p>
            </div>
            <div className="p-4 bg-green-500 text-white rounded-md">
              <p className="text-sm font-medium uppercase tracking-wider mb-1">
                Yesterday
              </p>
              <p className="text-3xl font-bold">987</p>
            </div>
            <div className="p-4 bg-purple-500 text-white rounded-md">
              <p className="text-sm font-medium uppercase tracking-wider mb-1">
                This Week
              </p>
              <p className="text-3xl font-bold">5678</p>
            </div>
            <div className="p-4 bg-yellow-500 text-white rounded-md">
              <p className="text-sm font-medium uppercase tracking-wider mb-1">
                This Month
              </p>
              <p className="text-3xl font-bold">23456</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default VisitorCount
