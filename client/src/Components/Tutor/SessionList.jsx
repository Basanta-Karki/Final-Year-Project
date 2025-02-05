import React from 'react';

const SessionList = () => {
  const sessions = [
    { name: "Alice Brown", subject: "Advanced Calculus", time: "2:00 PM - 3:00 PM", status: "Confirmed" },
    { name: "James Wilson", subject: "Quantum Physics", time: "4:30 PM - 5:30 PM", status: "Pending" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-5 mt-4">
      <h2 className="text-lg font-semibold flex justify-between">
        Upcoming Sessions
        <a href="#" className="text-blue-500">View All</a>
      </h2>
      {sessions.map((session, index) => (
        <div key={index} className="flex justify-between items-center mt-3">
          <div className="flex items-center">
            <img src="/path-to-avatar.jpg" alt="avatar" className="w-10 h-10 rounded-full mr-3"/>
            <div>
              <p className="font-bold">{session.name}</p>
              <p>{session.subject}</p>
            </div>
          </div>
          <div>
            <p>{session.time}</p>
            <span className={`text-sm font-semibold ${session.status === 'Confirmed' ? 'text-green-500' : 'text-yellow-500'}`}>{session.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SessionList;
