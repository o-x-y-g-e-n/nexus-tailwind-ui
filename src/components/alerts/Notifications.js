import React from "react";

const Notifications = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-yellow-200 text-yellow-800 border-l-4 border-yellow-500 p-4 rounded-lg">
        <div className="font-bold text-lg mb-2">Warning</div>
        <p className="text-sm">This is a warning notification.</p>
      </div>

      <div className="bg-green-200 text-green-800 border-l-4 border-green-500 p-4 rounded-lg">
        <div className="font-bold text-lg mb-2">Success</div>
        <p className="text-sm">This is a success notification.</p>
      </div>

      <div className="bg-blue-200 text-blue-800 border-l-4 border-blue-500 p-4 rounded-lg">
        <div className="font-bold text-lg mb-2">Info</div>
        <p className="text-sm">This is an info notification.</p>
      </div>
    </div>
  );
};

export default Notifications;
