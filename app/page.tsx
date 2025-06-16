'use client';
import React from 'react';

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-[#e6f2fa] flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0872B3] mb-4">
          Welcome to Imotrak Pages
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your comprehensive solution for managing staff and organization data.
        </p>
        {/* Optional: Add links to login/dashboard here later if needed */}
        {/* <div className="flex justify-center gap-4">
          <a href="/login" className="px-6 py-3 bg-[#0872B3] text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold">Login</a>
          <a href="/dashboard" className="px-6 py-3 border border-[#0872B3] text-[#0872B3] rounded-lg shadow hover:bg-gray-100 transition-colors font-semibold">Dashboard</a>
        </div> */}
      </div>
    </main>
  );
}
