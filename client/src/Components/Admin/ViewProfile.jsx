import React from 'react';
import { FiX, FiFileText } from 'react-icons/fi';

function TutorProfile({ tutor, onClose }) {
  if (!tutor) return null; 

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <FiX size={24} />
        </button>
        <div className="flex gap-4 mb-4">
          <img src={tutor.imageUrl} alt={tutor.name} className="rounded-full w-24 h-24" />
          <div>
            <h2 className="text-xl font-semibold">{tutor.name}</h2>
            <p className="text-gray-500">{tutor.subject} Tutor</p>
            <span className={`text-sm px-2 inline-block rounded-full ${tutor.status === 'Pending' ? 'bg-yellow-200' : 'bg-green-200'}`}>
              {tutor.status}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>Email:</strong> {tutor.email}</p>
            <p><strong>City:</strong> {tutor.city}</p>
            <p><strong>Qualification:</strong> {tutor.qualification}</p>
            <p><strong>Documents:</strong> <FiFileText className="inline" /> {tutor.documentName}</p>
          </div>
          <div>
            <p><strong>Phone:</strong> {tutor.phone}</p>
            <p><strong>Experience:</strong> {tutor.experience} years</p>
            <p><strong>Teaching Mode:</strong> {tutor.teachingMode}</p>
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={() => alert('Rejected')} className="px-4 py-2 rounded bg-red-500 text-white">
            Reject
          </button>
          <button onClick={() => alert('Approved')} className="px-4 py-2 rounded bg-green-500 text-white">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}

export default TutorProfile;
