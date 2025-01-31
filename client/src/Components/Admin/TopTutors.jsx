// import React from 'react';
// import { FiEye } from 'react-icons/fi';
// import { Link, useNavigate } from "react-router-dom";


// const tutors = [
//   { name: 'Sarah Wilson', subject: 'Mathematics', rating: 4.9, students: 45, earnings: 2890, status: 'Approved' },
//   { name: 'Michael Chen', subject: 'Physics', rating: 4.8, students: 38, earnings: 2340, status: 'Pending' }
// ];

// function TopTutors() {
//   return (
//     <div className="bg-white shadow rounded-lg p-4 mt-5">
//       <h3 className="text-lg font-semibold mb-4">Top Performing Tutors</h3>
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm text-left text-gray-500">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//             <tr>
//               <th scope="col" className="py-3 px-6">Tutor</th>
//               <th scope="col" className="py-3 px-6">Subject</th>
//               <th scope="col" className="py-3 px-6">Rating</th>
//               <th scope="col" className="py-3 px-6">Students</th>
//               <th scope="col" className="py-3 px-6">Earnings</th>
//               <th scope="col" className="py-3 px-6">Status</th>
//               <th scope="col" className="py-3 px-6">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tutors.map((tutor, index) => (
//               <tr key={index} className="bg-white border-b">
//                 <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
//                   {tutor.name}
//                 </td>
//                 <td className="py-4 px-6">{tutor.subject}</td>
//                 <td className="py-4 px-6">{tutor.rating}</td>
//                 <td className="py-4 px-6">{tutor.students}</td>
//                 <td className="py-4 px-6">${tutor.earnings.toLocaleString()}</td>
//                 <td className="py-4 px-6">
//                   <span className={`font-semibold ${tutor.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
//                     {tutor.status}
//                   </span>
//                 </td>
//                 <td className="py-4 px-6">
//                   <button className="text-blue-600 hover:text-blue-900">
//                     <FiEye className="inline mr-2" />View Profile
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TopTutors;




import React from 'react';
import { FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const tutors = [
  { name: 'Sarah Wilson', subject: 'Mathematics', rating: 4.9, students: 45, earnings: 2890, status: 'Approved' },
  { name: 'Michael Chen', subject: 'Physics', rating: 4.8, students: 38, earnings: 2340, status: 'Pending' }
];

function TopTutors() {
  const navigate = useNavigate();  // Hook for navigation

  // Function to navigate to tutor's profile
  const viewProfile = (tutorName) => {
    // Navigate to a dynamic route, assuming you have a route set up like '/profile/:tutorName'
    // navigate(`/profile/${encodeURIComponent(tutorName)}`);
    navigate("/profile");
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-5">
      <h3 className="text-lg font-semibold mb-4">Top Performing Tutors</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">Tutor</th>
              <th scope="col" className="py-3 px-6">Subject</th>
              <th scope="col" className="py-3 px-6">Rating</th>
              <th scope="col" className="py-3 px-6">Students</th>
              <th scope="col" className="py-3 px-6">Earnings</th>
              <th scope="col" className="py-3 px-6">Status</th>
              <th scope="col" className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutors.map((tutor, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  {tutor.name}
                </td>
                <td className="py-4 px-6">{tutor.subject}</td>
                <td className="py-4 px-6">{tutor.rating}</td>
                <td className="py-4 px-6">{tutor.students}</td>
                <td className="py-4 px-6">${tutor.earnings.toLocaleString()}</td>
                <td className="py-4 px-6">
                  <span className={`font-semibold ${tutor.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                    {tutor.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button onClick={() => viewProfile(tutor.name)} className="text-blue-600 hover:text-blue-900 flex items-center">
                    <FiEye className="inline mr-2" />View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopTutors;

