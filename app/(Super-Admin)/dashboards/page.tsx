'use client';
import React from 'react';

export default function SuperAdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[#e6f2fa] px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8 text-[#0872B3]">Super Admin Dashboard</h1>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-700">Welcome to the Super Admin Dashboard. Use the navigation to manage organizations and users.</p>
        </div>
      </div>
    </main>
  );
}
