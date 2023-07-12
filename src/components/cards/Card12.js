import React from 'react';
const Card12 = () => {
    return (
<div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-4">
  <div className="relative">
    <img src="https://images.pexels.com/photos/1652544/pexels-photo-1652544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Event Management" className="w-full h-40 object-cover rounded-t-lg" />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 rounded-t-lg" aria-hidden="true"></div>
    <div className="absolute top-0 right-0 m-4">
      <img src="https://i.ibb.co/SKDZMH7/qr-code.png" alt="QR Code" className="w-12 h-12 rounded-md" />
    </div>
    <div className="absolute bottom-0 mb-4 ml-4 text-white">
      <h2 className="text-lg font-semibold leading-tight" aria-label="Business Name">Event Management</h2>
      <p className="text-sm text-gray-300" aria-label="Contact Number">Contact: (123) 456-7890</p>
      <p className="text-sm text-gray-300" aria-label="Email">Email: info@eventmanagement.com</p>
    </div>
  </div>
  <div className="px-4 py-2 bg-gray-100 rounded-b-lg">
    <p className="text-sm text-gray-700" aria-label="Description">Specializing in event planning and management. Contact us for your next memorable event!</p>
  </div>
</div>


    )
}

export default Card12;