import Image from "next/image";
import Link from "next/link";
import { Eye, Pencil, Trash2, Star } from "lucide-react";
import React from "react";

const requests = [
  {
    id: "REQ-001",
    date: "2024-02-22",
    purpose: "Field Trip",
    destination: "Huye Campus",
    passengers: 15,
    status: "Pending",
    startDate: "2024-02-23",
    endDate: "2024-02-23",
  },
  {
    id: "REQ-002",
    date: "2024-02-21",
    purpose: "Conference",
    destination: "Kigali Convention Center",
    passengers: 4,
    status: "Approved",
    startDate: "2024-02-22",
    endDate: "2024-02-22",
  },
  {
    id: "REQ-003",
    date: "2024-02-20",
    purpose: "Research Visit",
    destination: "Kigali Heights",
    passengers: 3,
    status: "Rejected",
    startDate: "2024-02-21",
    endDate: "2024-02-21",
  },
  {
    id: "REQ-004",
    date: "2024-02-18",
    purpose: "Workshop",
    destination: "Rubavu Beach",
    passengers: 8,
    status: "Approved",
    startDate: "2024-02-19",
    endDate: "2024-02-20",
  },
  {
    id: "REQ-005",
    date: "2024-02-15",
    purpose: "Team Building",
    destination: "Nyungwe Forest",
    passengers: 10,
    status: "Pending",
    startDate: "2024-02-16",
    endDate: "2024-02-17",
  },
  {
    id: "REQ-006",
    date: "2024-02-10",
    purpose: "Site Visit",
    destination: "Musanze",
    passengers: 6,
    status: "Completed",
    startDate: "2024-02-11",
    endDate: "2024-02-12",
  },
  {
    id: "REQ-007",
    date: "2024-02-08",
    purpose: "Seminar",
    destination: "Karongi",
    passengers: 5,
    status: "Approved",
    startDate: "2024-02-09",
    endDate: "2024-02-10",
  },
  {
    id: "REQ-008",
    date: "2024-02-07",
    purpose: "Inspection",
    destination: "Bugesera",
    passengers: 7,
    status: "Pending",
    startDate: "2024-02-08",
    endDate: "2024-02-08",
  },
  {
    id: "REQ-009",
    date: "2024-02-06",
    purpose: "Training",
    destination: "Rwamagana",
    passengers: 12,
    status: "Completed",
    startDate: "2024-02-07",
    endDate: "2024-02-07",
  },
  {
    id: "REQ-010",
    date: "2024-02-05",
    purpose: "Field Trip",
    destination: "Gicumbi",
    passengers: 9,
    status: "Rejected",
    startDate: "2024-02-06",
    endDate: "2024-02-06",
  },
  {
    id: "REQ-011",
    date: "2024-02-04",
    purpose: "Conference",
    destination: "Kigali Arena",
    passengers: 4,
    status: "Approved",
    startDate: "2024-02-05",
    endDate: "2024-02-05",
  },
  {
    id: "REQ-012",
    date: "2024-02-03",
    purpose: "Research Visit",
    destination: "Muhanga",
    passengers: 3,
    status: "Pending",
    startDate: "2024-02-04",
    endDate: "2024-02-04",
  },
  {
    id: "REQ-013",
    date: "2024-02-02",
    purpose: "Workshop",
    destination: "Rusizi",
    passengers: 8,
    status: "Completed",
    startDate: "2024-02-03",
    endDate: "2024-02-03",
  },
  {
    id: "REQ-014",
    date: "2024-02-01",
    purpose: "Team Building",
    destination: "Kibuye",
    passengers: 10,
    status: "Approved",
    startDate: "2024-02-02",
    endDate: "2024-02-03",
  },
  {
    id: "REQ-015",
    date: "2024-01-31",
    purpose: "Site Visit",
    destination: "Ngoma",
    passengers: 6,
    status: "Rejected",
    startDate: "2024-02-01",
    endDate: "2024-02-01",
  },
  {
    id: "REQ-016",
    date: "2024-01-30",
    purpose: "Seminar",
    destination: "Nyanza",
    passengers: 5,
    status: "Pending",
    startDate: "2024-01-31",
    endDate: "2024-01-31",
  },
  {
    id: "REQ-017",
    date: "2024-01-29",
    purpose: "Inspection",
    destination: "Gatsibo",
    passengers: 7,
    status: "Approved",
    startDate: "2024-01-30",
    endDate: "2024-01-30",
  },
  {
    id: "REQ-018",
    date: "2024-01-28",
    purpose: "Training",
    destination: "Nyagatare",
    passengers: 12,
    status: "Completed",
    startDate: "2024-01-29",
    endDate: "2024-01-29",
  },
  {
    id: "REQ-019",
    date: "2024-01-27",
    purpose: "Field Trip",
    destination: "Rutsiro",
    passengers: 9,
    status: "Pending",
    startDate: "2024-01-28",
    endDate: "2024-01-28",
  },
  {
    id: "REQ-020",
    date: "2024-01-26",
    purpose: "Conference",
    destination: "Kigali Heights",
    passengers: 4,
    status: "Rejected",
    startDate: "2024-01-27",
    endDate: "2024-01-27",
  },
  {
    id: "REQ-021",
    date: "2024-01-25",
    purpose: "Research Visit",
    destination: "Rubavu",
    passengers: 3,
    status: "Approved",
    startDate: "2024-01-26",
    endDate: "2024-01-26",
  },
  {
    id: "REQ-022",
    date: "2024-01-24",
    purpose: "Workshop",
    destination: "Kayonza",
    passengers: 8,
    status: "Completed",
    startDate: "2024-01-25",
    endDate: "2024-01-25",
  },
  {
    id: "REQ-023",
    date: "2024-01-23",
    purpose: "Team Building",
    destination: "Gisagara",
    passengers: 10,
    status: "Pending",
    startDate: "2024-01-24",
    endDate: "2024-01-24",
  },
  {
    id: "REQ-024",
    date: "2024-01-22",
    purpose: "Site Visit",
    destination: "Kamonyi",
    passengers: 6,
    status: "Approved",
    startDate: "2024-01-23",
    endDate: "2024-01-23",
  },
  {
    id: "REQ-025",
    date: "2024-01-21",
    purpose: "Seminar",
    destination: "Rulindo",
    passengers: 5,
    status: "Completed",
    startDate: "2024-01-22",
    endDate: "2024-01-22",
  },
  {
    id: "REQ-026",
    date: "2024-01-20",
    purpose: "Inspection",
    destination: "Burera",
    passengers: 7,
    status: "Rejected",
    startDate: "2024-01-21",
    endDate: "2024-01-21",
  },
  {
    id: "REQ-027",
    date: "2024-01-19",
    purpose: "Training",
    destination: "Gakenke",
    passengers: 12,
    status: "Approved",
    startDate: "2024-01-20",
    endDate: "2024-01-20",
  },
  {
    id: "REQ-028",
    date: "2024-01-18",
    purpose: "Field Trip",
    destination: "Nyamasheke",
    passengers: 9,
    status: "Completed",
    startDate: "2024-01-19",
    endDate: "2024-01-19",
  },
  {
    id: "REQ-029",
    date: "2024-01-17",
    purpose: "Conference",
    destination: "Kigali Arena",
    passengers: 4,
    status: "Pending",
    startDate: "2024-01-18",
    endDate: "2024-01-18",
  },
  {
    id: "REQ-030",
    date: "2024-01-16",
    purpose: "Research Visit",
    destination: "Kirehe",
    passengers: 3,
    status: "Approved",
    startDate: "2024-01-17",
    endDate: "2024-01-17",
  },
];

const statusBadge = (status: string) => {
  const base = "px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1";
  switch (status) {
    case "Pending":
      return <span className={`${base} bg-yellow-100 text-yellow-800`}>Pending</span>;
    case "Approved":
      return (
        <span className={`${base} bg-green-100 text-green-800`}>
          Approved
          <span title="Ready for Issue Submission">
            <Star className="w-4 h-4 text-blue-500 ml-1" fill="#3b82f6" />
          </span>
        </span>
      );
    case "Completed":
      return <span className={`${base} bg-blue-100 text-blue-800`}>Completed</span>;
    case "Rejected":
      return <span className={`${base} bg-red-100 text-red-800`}>Rejected</span>;
    default:
      return <span className={base}>{status}</span>;
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Vehicle Requests</h1>
            <div className="flex gap-2 items-center">
              <select className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white">
                <option>All Status</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
              <select className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white">
                <option>All Time</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
              <Link href="#" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors text-sm font-semibold">+ New Request</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="sticky top-0 bg-gray-50 z-10">
                <tr className="text-gray-600">
                  <th className="px-4 py-2 text-left font-semibold">Request ID</th>
                  <th className="px-4 py-2 text-left font-semibold">Date</th>
                  <th className="px-4 py-2 text-left font-semibold">Purpose</th>
                  <th className="px-4 py-2 text-left font-semibold">Destination</th>
                  <th className="px-4 py-2 text-left font-semibold">Passengers</th>
                  <th className="px-4 py-2 text-left font-semibold">Status</th>
                  <th className="px-4 py-2 text-left font-semibold">Start Date</th>
                  <th className="px-4 py-2 text-left font-semibold">End Date</th>
                  <th className="px-4 py-2 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req, idx) => (
                  <tr key={req.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-blue-50"}>
                    <td className="px-4 py-2 font-mono">{req.id}</td>
                    <td className="px-4 py-2">{req.date}</td>
                    <td className="px-4 py-2">{req.purpose}</td>
                    <td className="px-4 py-2">{req.destination}</td>
                    <td className="px-4 py-2 text-center">{req.passengers}</td>
                    <td className="px-4 py-2">{statusBadge(req.status)}</td>
                    <td className="px-4 py-2">{req.startDate}</td>
                    <td className="px-4 py-2">{req.endDate}</td>
                    <td className="px-4 py-2 flex gap-2">
                      <button className="p-1 rounded hover:bg-gray-100" aria-label="View" title="View">
                        <Eye className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1 rounded hover:bg-gray-100" aria-label="Edit" title="Edit">
                        <Pencil className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1 rounded hover:bg-gray-100" aria-label="Delete" title="Delete">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
