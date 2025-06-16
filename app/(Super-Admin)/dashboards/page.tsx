'use client';
import React from 'react';
import { Users, Building2, AlertTriangle, TrendingUp, TrendingDown, Shield } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Sample data for charts and statistics
const stats = {
  totalUsers: 1250,
  totalOrganizations: 45,
  activeAlerts: 12,
  userGrowth: 15,
  orgGrowth: 5
};

// User growth data for line chart
const userGrowthData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'New Users',
      data: [65, 78, 90, 81, 56, 55],
      borderColor: '#0872B3',
      backgroundColor: 'rgba(8, 114, 179, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

// Organization distribution data for bar chart
const orgDistributionData = {
  labels: ['Education', 'Healthcare', 'Government', 'Private', 'NGO'],
  datasets: [
    {
      label: 'Organizations by Sector',
      data: [12, 19, 8, 15, 7],
      backgroundColor: [
        'rgba(8, 114, 179, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
    },
  ],
};

// User role distribution for doughnut chart
const userRoleData = {
  labels: ['Admin', 'Staff', 'Viewer'],
  datasets: [
    {
      data: [300, 450, 500],
      backgroundColor: [
        'rgba(8, 114, 179, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(75, 192, 192, 0.8)',
      ],
    },
  ],
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#e6f2fa] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0872B3]">Super Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">System overview and technical monitoring</p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Users Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Users</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{stats.totalUsers}</h3>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-green-500 text-sm ml-1">+{stats.userGrowth}% this month</span>
                </div>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-[#0872B3]" />
              </div>
            </div>
          </div>

          {/* Organizations Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Organizations</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{stats.totalOrganizations}</h3>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-green-500 text-sm ml-1">+{stats.orgGrowth}% this month</span>
                </div>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* User Growth Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">User Growth Trend</h3>
            <div className="h-64">
              <Line 
                data={userGrowthData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top' as const,
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Organization Distribution Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Organization Distribution</h3>
            <div className="h-64">
              <Bar 
                data={orgDistributionData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'top' as const,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* User Role Distribution and System Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Role Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">User Role Distribution</h3>
            <div className="h-64 flex items-center justify-center">
              <Doughnut 
                data={userRoleData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'right' as const,
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* System Alerts */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">System Alerts</h3>
              <div className="bg-red-100 px-3 py-1 rounded-full">
                <span className="text-red-600 text-sm font-medium">{stats.activeAlerts} active</span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { type: 'Security', message: 'Multiple failed login attempts detected' },
                { type: 'System', message: 'Database backup required' },
                { type: 'Performance', message: 'High server load detected' }
              ].map((alert, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{alert.message}</p>
                    <p className="text-xs text-gray-500">{alert.type} Alert</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
