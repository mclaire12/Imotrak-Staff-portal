"use client";

import { useState } from "react";

export default function RecentRequests() {
  const [requests] = useState([
    { id: "VR-001", requester: "John Doe", department: "Computer Science", reason: "Field Trip", date: "2024-03-15", status: "Pending" },
    { id: "VR-002", requester: "Jane Smith", department: "Engineering", reason: "Official Meeting", date: "2024-03-16", status: "Approved" },
    { id: "VR-003", requester: "Mike Johnson", department: "Business", reason: "Campus Transfer", date: "2024-03-14", status: "Declined" },
  ]);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recent Requests</h2>
            <div className="flex space-x-2">
              <select className="border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Departments</option>
              </select>
              <select className="border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Status</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm font-medium text-gray-500 bg-gray-50 uppercase">
                  <th className="py-3 px-6">Request ID</th>
                  <th className="py-3 px-6">Requester</th>
                  <th className="py-3 px-6">Department</th>
                  <th className="py-3 px-6">Reason</th>
                  <th className="py-3 px-6">Date</th>
                  <th className="py-3 px-6">Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-6 text-gray-800">{request.id}</td>
                    <td className="py-3 px-6 text-gray-800">{request.requester}</td>
                    <td className="py-3 px-6 text-gray-800">{request.department}</td>
                    <td className="py-3 px-6 text-gray-800">{request.reason}</td>
                    <td className="py-3 px-6 text-gray-800">{request.date}</td>
                    <td className="py-3 px-6">
                      <span
                        className={`inline-block px-3 py-1 text-sm font-medium rounded-full text-white ${
                          request.status === "Pending"
                            ? "bg-yellow-400"
                            : request.status === "Approved"
                            ? "bg-green-500"
                            : "bg-pink-400"
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}