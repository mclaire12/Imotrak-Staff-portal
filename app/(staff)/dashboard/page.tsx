"use client";
import { BarChart, CheckCircle, AlertTriangle, Ban, Eye, Pencil } from "lucide-react";
import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Trip Requests",
      data: [12, 19, 16, 9, 11, 14],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37,99,235,0.1)",
      tension: 0.4,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: "#2563eb",
    },
  ],
};
const lineOptions = {
  responsive: true,
  plugins: {
    legend: { display: true, position: 'top' as const },
  },
  scales: {
    y: { beginAtZero: true, ticks: { stepSize: 2 } },
  },
};

const donutData = {
  labels: ["Pending", "Approved", "Completed", "Rejected"],
  datasets: [
    {
      data: [3, 12, 8, 2],
      backgroundColor: ["#fde047", "#4ade80", "#60a5fa", "#f87171"],
      borderWidth: 2,
    },
  ],
};
const donutOptions = {
  plugins: {
    legend: { position: 'right' as const },
  },
  cutout: '70%',
};

const stats = [
  {
    label: "Pending Requests",
    value: 3,
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
  },
  {
    label: "Approved Requests",
    value: 12,
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
  },
  {
    label: "Completed Trips",
    value: 8,
    icon: <BarChart className="w-6 h-6 text-blue-500" />,
  },
  {
    label: "Rejected Requests",
    value: 2,
    icon: <Ban className="w-6 h-6 text-red-500" />,
  },
];

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
];

const statusBadge = (status: string) => {
  const base = "px-3 py-1 rounded-full text-xs font-semibold";
  switch (status) {
    case "Pending":
      return <span className={`${base} bg-yellow-100 text-yellow-800`}>Pending</span>;
    case "Approved":
      return <span className={`${base} bg-green-100 text-green-800`}>Approved</span>;
    case "Completed":
      return <span className={`${base} bg-blue-100 text-blue-800`}>Completed</span>;
    case "Rejected":
      return <span className={`${base} bg-red-100 text-red-800`}>Rejected</span>;
    default:
      return <span className={base}>{status}</span>;
  }
};

const LineChart = () => (
  <div className="flex justify-center">
    <div className="w-full max-w-md">
      <Line data={lineData} options={lineOptions} height={192} />
    </div>
  </div>
);
const DonutChart = () => (
  <div className="flex justify-center">
    <div className="w-full max-w-md">
      <Doughnut data={donutData} options={donutOptions} height={192} />
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 bg-white rounded-lg shadow-sm p-4 border border-gray-100"
          >
            <div className="bg-gray-100 rounded-full p-3 flex items-center justify-center">
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="font-semibold text-gray-700 mb-4">Monthly Trip Requests</div>
          <LineChart />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="font-semibold text-gray-700 mb-4">Request Status Distribution</div>
          <DonutChart />
        </div>
      </div>

      {/* Recent Requests Table */}
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold text-lg text-gray-800">Recent Vehicle Requests</div>
          <button className="text-blue-600 hover:underline text-sm font-medium">+ New Request</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
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
              {requests.map((req) => (
                <tr key={req.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-2 font-mono">{req.id}</td>
                  <td className="px-4 py-2">{req.date}</td>
                  <td className="px-4 py-2">{req.purpose}</td>
                  <td className="px-4 py-2">{req.destination}</td>
                  <td className="px-4 py-2 text-center">{req.passengers}</td>
                  <td className="px-4 py-2">{statusBadge(req.status)}</td>
                  <td className="px-4 py-2">{req.startDate}</td>
                  <td className="px-4 py-2">{req.endDate}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button className="p-1 rounded hover:bg-gray-100" aria-label="View">
                      <Eye className="w-4 h-4 text-gray-500" />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100" aria-label="Edit">
                      <Pencil className="w-4 h-4 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 