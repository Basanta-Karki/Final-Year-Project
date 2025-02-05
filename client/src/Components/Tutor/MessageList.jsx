import React from 'react';

const MessageList = () => {
  const messages = [
    { name: "Alice Brown", message: "Can we reschedule tomorrow's session to 3 PM?", time: "10:30 AM" },
    { name: "James Wilson", message: "Thank you for the great physics lesson!", time: "Yesterday" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mt-4">
      <h2 className="text-lg font-semibold flex justify-between">
        Recent Messages
        <a href="#" className="text-blue-500">View All</a>
      </h2>
      {messages.map((message, index) => (
        <div key={index} className="flex justify-between items-center mt-3">
          <div className="flex items-center">
            <img src="/path-to-avatar.jpg" alt="avatar" className="w-10 h-10 rounded-full mr-3"/>
            <div>
              <p className="font-bold">{message.name}</p>
              <p>{message.message}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">{message.time}</p>
        </div>
      ))}
    </div>
  );
}

export default MessageList;
