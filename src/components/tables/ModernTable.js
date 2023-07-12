import React from "react"

const ModernTable = () => {
  return (
    <html lang="en">
      <body class="bg-gray-100">
        <div class="container mx-auto p-4">
          <div class="mt-4 mb-4">
            <label for="search-input" class="block mb-2">
              Search:
            </label>
            <input
              type="text"
              id="search-input"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th class="px-6 py-3 bg-gray-100 border-b border-gray-300">
                    <div class="flex items-center">
                      <span class="text-gray-800 font-semibold pr-2">Name</span>
                      <button class="text-blue-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th class="px-6 py-3 bg-gray-100 border-b border-gray-300">
                    <div class="flex items-center">
                      <span class="text-gray-800 font-semibold pr-2">
                        Email
                      </span>
                      <button class="text-blue-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </th>
                  <th class="px-6 py-3 bg-gray-100 border-b border-gray-300">
                    <div class="flex items-center">
                      <span class="text-gray-800 font-semibold pr-2">Role</span>
                      <button class="text-blue-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 border-b border-gray-300">John Doe</td>
                  <td class="px-6 py-4 border-b border-gray-300">
                    john@example.com
                  </td>
                  <td class="px-6 py-4 border-b border-gray-300">Admin</td>
                </tr>
                <tr class="bg-white">
                  <td class="px-6 py-4 border-b border-gray-300">Jane Smith</td>
                  <td class="px-6 py-4 border-b border-gray-300">
                    jane@example.com
                  </td>
                  <td class="px-6 py-4 border-b border-gray-300">User</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 border-b border-gray-300">
                    Bob Johnson
                  </td>
                  <td class="px-6 py-4 border-b border-gray-300">
                    bob@example.com
                  </td>
                  <td class="px-6 py-4 border-b border-gray-300">User</td>
                </tr>
                <tr class="bg-white">
                  <td class="px-6 py-4 border-b border-gray-300">
                    Alice Williams
                  </td>
                  <td class="px-6 py-4 border-b border-gray-300">
                    alice@example.com
                  </td>
                  <td class="px-6 py-4 border-b border-gray-300">Admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  )
}

export default ModernTable
