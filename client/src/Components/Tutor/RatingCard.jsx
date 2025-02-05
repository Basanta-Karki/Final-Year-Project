import React from 'react';

const RatingCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white shadow-md rounded-lg p-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Average Rating</h2>
          <p className="text-3xl font-bold">4.9</p>
        </div>
        <span className="text-gray-500">0%</span>
      </div>
      <div className="bg-white shadow-md rounded-lg p-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Monthly Earnings</h2>
          <p className="text-3xl font-bold">$2,450</p>
        </div>
        <span className="text-purple-500">+8%</span>
      </div>
    </div>
  );
}

export default RatingCard;
